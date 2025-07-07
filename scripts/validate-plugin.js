#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔍 Validating AnimaGen Figma Plugin...\n');

// Check manifest.json
const manifestPath = path.join(__dirname, '../figma-plugin/manifest.json');
if (!fs.existsSync(manifestPath)) {
  console.error('❌ manifest.json not found');
  process.exit(1);
}

const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
console.log('✅ manifest.json found');
console.log(`   Name: ${manifest.name}`);
console.log(`   ID: ${manifest.id}`);
console.log(`   API: ${manifest.api}`);

// Check main file
const mainPath = path.join(__dirname, '../figma-plugin', manifest.main);
if (!fs.existsSync(mainPath)) {
  console.error(`❌ Main file not found: ${manifest.main}`);
  process.exit(1);
}
console.log(`✅ Main file found: ${manifest.main}`);

// Check UI file
const uiPath = path.join(__dirname, '../figma-plugin', manifest.ui);
if (!fs.existsSync(uiPath)) {
  console.error(`❌ UI file not found: ${manifest.ui}`);
  process.exit(1);
}
console.log(`✅ UI file found: ${manifest.ui}`);

// Check file sizes
const stats = {
  manifest: fs.statSync(manifestPath).size,
  main: fs.statSync(mainPath).size,
  ui: fs.statSync(uiPath).size
};

console.log('\n📊 File sizes:');
console.log(`   manifest.json: ${stats.manifest} bytes`);
console.log(`   ${manifest.main}: ${stats.main} bytes`);
console.log(`   ${manifest.ui}: ${stats.ui} bytes`);

console.log('\n🎉 Plugin validation completed successfully!');
console.log('\n📋 Next steps:');
console.log('   1. Open Figma');
console.log('   2. Go to Plugins > Development > Import plugin from manifest...');
console.log('   3. Select figma-plugin/manifest.json');
console.log('   4. Test the plugin with some frames');