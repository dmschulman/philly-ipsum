import fs from 'node:fs';
import path from 'node:path';

const parse = (filename) => {
  const filepath = path.join(process.cwd(), 'src/data', filename);
  return fs.readFileSync(filepath, 'utf-8')
    .split('\n')
    .map(line => line.trim())
    .filter(line => line && !line.startsWith('#'));
};

export const words = {
  people: parse('people.txt'),
  places: parse('places.txt'),
  things: parse('things.txt'),
  openers: parse('openers.txt'),
  phrases: parse('phrases.txt'),
};