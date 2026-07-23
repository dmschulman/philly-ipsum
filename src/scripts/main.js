import { buildGenerator } from '../lib/generator.js';

const words = JSON.parse(document.getElementById('words-data').textContent);
const { output } = buildGenerator(words);

const outputEl = document.getElementById('output');
const paragraphSelect = document.getElementById('paragraph-count');
const sentenceSelect = document.getElementById('sentence-count');
const includeHtmlSelect = document.getElementById('include-html');
const tagSelect = document.getElementById('html-tag');
const copyHint = document.getElementById('copy-hint');

let currentParagraphs = [];

const display = () => {
  const includeHtml = includeHtmlSelect.value === 'yes';
  const tag = tagSelect.value;

  if (includeHtml) {
    outputEl.value = currentParagraphs
    .map(text => `<${tag}>${text}</${tag}>`)
    .join('\n');
  } else {
    outputEl.value = currentParagraphs.join('\n\n');
  }
};

const regenerate = () => {
  const pCount = Number(paragraphSelect.value);
  const sCount = Number(sentenceSelect.value);
  currentParagraphs = output(pCount, sCount);
  display();
};

const showHint = (message) => {
  copyHint.textContent = message;
  copyHint.classList.remove('hint-show');
  void copyHint.offsetWidth;
  copyHint.classList.add('hint-show');
  setTimeout(() => copyHint.classList.remove('hint-show'), 3000);
};

currentParagraphs = outputEl.value.split(/\n\n+/).filter(Boolean);
display();

document.getElementById('regenerate').addEventListener('click', regenerate);
paragraphSelect.addEventListener('change', regenerate);
sentenceSelect.addEventListener('change', regenerate);
includeHtmlSelect.addEventListener('change', display);
tagSelect.addEventListener('change', display);

document.getElementById('copy').addEventListener('click', async () => {
  const text = outputEl.value;
  try {
    await navigator.clipboard.writeText(text);
    showHint('text copied');
  } catch {
    showHint('copy failed');
  }
});