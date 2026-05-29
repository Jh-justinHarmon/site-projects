#!/usr/bin/env node
import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const CONTENT_DIR = join(__dirname, '../content/projects');
const OUTPUT_FILE = join(__dirname, '../public/projects.json');

console.log('📦 Building projects.json...\n');

// Read all JSON files from content/projects/
let files;
try {
    files = readdirSync(CONTENT_DIR).filter(f => f.endsWith('.json'));
} catch (err) {
    console.error(`❌ Error reading directory: ${CONTENT_DIR}`);
    console.error(err.message);
    process.exit(1);
}

console.log(`Found ${files.length} project file(s):`);
files.forEach(f => console.log(`  - ${f}`));
console.log('');

// Load and combine all projects
const projects = [];
let errorCount = 0;

for (const filename of files) {
    const filepath = join(CONTENT_DIR, filename);
    try {
        const content = readFileSync(filepath, 'utf-8');
        const project = JSON.parse(content);
        projects.push(project);
        console.log(`✅ Parsed: ${filename}`);
    } catch (err) {
        console.error(`❌ Invalid JSON in ${filename}:`);
        console.error(`   ${err.message}`);
        errorCount++;
    }
}

console.log('');

if (errorCount > 0) {
    console.error(`❌ Failed to parse ${errorCount} file(s). Aborting.`);
    process.exit(1);
}

// Write combined projects to public/
try {
    writeFileSync(OUTPUT_FILE, JSON.stringify(projects, null, 2), 'utf-8');
    console.log(`✅ Generated: ${OUTPUT_FILE}`);
    console.log(`   Projects: ${projects.length}`);
    console.log(`   Size: ${(JSON.stringify(projects).length / 1024).toFixed(2)} KB`);
} catch (err) {
    console.error(`❌ Error writing output file:`);
    console.error(`   ${err.message}`);
    process.exit(1);
}

console.log('\n✨ Build complete!');
