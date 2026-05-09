const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

function traverse(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            traverse(fullPath);
        } else if (fullPath.endsWith('.jsx')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let originalContent = content;

            // 1. Hue shift: all 345 to 325
            content = content.replace(/hsl\(345 /g, 'hsl(325 ');
            
            // 2. Headings text color to foreground (Cream) instead of primary (Gold)
            // Look for <h1, <h2, <h3 with style={{ color: 'hsl(var(--primary))' ... }}
            content = content.replace(/(<h[123][^>]+style={{[^}]*color:\s*'hsl\(var\(--primary\)\)')/g, (match) => {
                return match.replace("'hsl(var(--primary))'", "'hsl(var(--foreground))'");
            });

            // 3. For any textShadow that uses primary, let's keep it primary or change it to foreground?
            // Usually text shadows use the same color as the text but with lower opacity or darker.
            // If text is foreground (cream), a gold text shadow might look weird.
            // Let's change textShadow using primary to use foreground if the color was changed.
            // But doing it via regex is tricky. Let's just do it directly.
            content = content.replace(/(textShadow:\s*['"`].*?)hsl\(var\(--primary\)(.*?)(['"`])/g, (match, p1, p2, p3) => {
                // If it's on an element that's already cream, the shadow should probably be background or primary.
                // Actually, gold shadow on cream text might look like a glowing aura, which is nice.
                // Let's leave text shadow alone for now, except if it looks extremely weird.
                // Let's change it to foreground to be safe and clean.
                return `${p1}hsl(var(--foreground)${p2}${p3}`;
            });

            if (content !== originalContent) {
                fs.writeFileSync(fullPath, content);
                console.log(`Updated ${fullPath}`);
            }
        }
    }
}

traverse(srcDir);
