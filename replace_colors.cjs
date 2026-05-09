const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

function traverse(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            traverse(fullPath);
        } else if (fullPath.endsWith('.jsx') || fullPath.endsWith('.js') || fullPath.endsWith('.css')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let originalContent = content;

            // Replace hardcoded hsl(43 80% 58%) with var(--primary) or its hex/hsl equivalent if needed.
            // Actually, in style={{ color: 'hsl(43 80% 58%)' }} it can be replaced with 'var(--primary)'.
            // But wait, the exact syntax in style is usually 'var(--primary)'. Wait, var(--primary) in tailwind is just 'hsl(var(--primary))' because --primary only has 'H S L' values without hsl() wrapper.
            // Wait, in the files, they are like: style={{ color: 'hsl(43 80% 58%)', textShadow: '0 2px 16px hsl(43 80% 40% / 0.4)' }}
            // Let's replace 'hsl(43 80% 58%)' with 'hsl(var(--primary))'
            // Let's replace 'hsl(43 80% 40% / 0.4)' with 'hsl(var(--primary) / 0.4)'
            // Let's replace 'hsl(345 52% 12%)' with 'hsl(var(--card))'
            // Let's replace 'hsl(345 55% 8%)' with 'hsl(var(--background))'

            // Replace specific patterns
            content = content.replace(/hsl\(43 80% 58%\)/g, 'hsl(var(--primary))');
            content = content.replace(/hsl\(43 80% 62%\)/g, 'hsl(var(--primary))');
            content = content.replace(/hsl\(43 80% 50% \/ ([0-9.]+)\)/g, 'hsl(var(--primary) / $1)');
            content = content.replace(/hsl\(43 80% 40% \/ ([0-9.]+)\)/g, 'hsl(var(--primary) / $1)');
            content = content.replace(/hsl\(345 52% 12%\)/g, 'hsl(var(--card))');
            content = content.replace(/hsl\(345 55% 8%\)/g, 'hsl(var(--background))');
            content = content.replace(/hsl\(345 58% 9%\)/g, 'hsl(var(--background))');

            // Wait, some places might have 'hsl(314 ...)' from the previous step.
            content = content.replace(/hsl\(314 [0-9]+% [0-9]+%\)/g, 'hsl(var(--background))'); // Be careful with this, might replace --card with --background if not precise

            if (content !== originalContent) {
                fs.writeFileSync(fullPath, content);
                console.log(`Updated ${fullPath}`);
            }
        }
    }
}

traverse(srcDir);
