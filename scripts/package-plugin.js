#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('📦 Packaging AnimaGen Figma Plugin...\n');

const outputDir = path.join(__dirname, '../dist');
const pluginDir = path.join(__dirname, '../figma-plugin');

// Create dist directory
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Copy plugin files
const files = ['manifest.json', 'code.js', 'ui.html'];

files.forEach(file => {
  const src = path.join(pluginDir, file);
  const dest = path.join(outputDir, file);
  
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log(`✅ Copied ${file}`);
  } else {
    console.error(`❌ File not found: ${file}`);
    process.exit(1);
  }
});

// Create README for distribution
const distReadme = `# AnimaGen Figma Plugin - Distribution

## Installation

1. Download all files from this directory
2. In Figma, go to Plugins > Development > Import plugin from manifest...
3. Select the manifest.json file
4. The plugin will be available in your development plugins

## Files

- \`manifest.json\` - Plugin configuration
- \`code.js\` - Main plugin logic
- \`ui.html\` - User interface

## Usage

1. Select frames in Figma
2. Run the AnimaGen plugin
3. Export frames and generate animations

For detailed usage instructions, see the main repository: https://github.com/GsusFC/afp
`;

fs.writeFileSync(path.join(outputDir, 'README.md'), distReadme);
console.log('✅ Created distribution README');

console.log(`\n🎉 Plugin packaged successfully in ${outputDir}`);
console.log('\n📋 Distribution files:');
files.forEach(file => {
  const filePath = path.join(outputDir, file);
  const size = fs.statSync(filePath).size;
  console.log(`   ${file}: ${size} bytes`);
});