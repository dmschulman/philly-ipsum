export const buildGenerator = (words) => {
  const pick = (list) => list[Math.floor(Math.random() * list.length)];

  const person = () => pick(words.people);
  const place = () => pick(words.places);
  const thing = () => pick(words.things);
  const opener = () => pick(words.openers);
  const phrase = () => pick(words.phrases);

const templates = [
  () => `${opener()} ${thing()} in ${place()}`,
  () => `${person()} ${phrase()} ${thing()}`,
  () => `${phrase()}, ${person()}`,
  () => `${opener()} ${person()} ${phrase()}`,
  () => `${person()} ${phrase()} in ${place()}`,
  () => `${thing()} ${phrase()} ${place()}`,
  () => `${opener()} ${thing()}, ${phrase()}`,
  () => `${person()} in ${place()}, ${phrase()}`,
  () => `${phrase()} ${thing()}`,
  () => `${opener()} ${place()}`,
  () => `${person()} and ${person()} ${phrase()}`,
  () => `${phrase()} in ${place()}`,
  () => `${person()} ${phrase()} ${thing()}, ${phrase()}`,
  () => `${opener()} ${person()} ${phrase()} ${thing()} in ${place()}`,
  () => `${person()} ${phrase()} in ${place()}, ${phrase()} ${thing()}`,
  () => `${phrase()}, ${person()} ${phrase()} ${thing()}`,
  () => `${opener()} ${thing()} in ${place()}, ${phrase()}`,
  () => `${person()} and ${person()} ${phrase()} in ${place()}`,
  () => `${thing()} ${phrase()} ${place()}, ${phrase()} ${person()}`,
  () => `${opener()} ${person()} in ${place()} ${phrase()} ${thing()}`,
  () => `${person()} ${phrase()} ${thing()} while ${person()} ${phrase()}`,
  () => `${phrase()} ${thing()}, ${phrase()} ${place()}`,
  () => `${person()} ${phrase()} ${thing()} but ${phrase()}`,
  () => `${opener()} ${thing()} and ${thing()} in ${place()}`,
  () => `${opener()} ${person()} ${phrase()} ${thing()} in ${place()}, ${phrase()}`,
  () => `${person()} ${phrase()} in ${place()} while ${person()} ${phrase()} ${thing()}`,
  () => `${phrase()}, ${person()} and ${person()} ${phrase()} ${thing()} in ${place()}`,
  () => `${opener()} ${thing()} in ${place()}, ${phrase()}, ${phrase()} ${person()}`,
  () => `${person()} ${phrase()} ${thing()}, ${phrase()} in ${place()}, ${phrase()}`,
  () => `${opener()} ${person()} in ${place()}, ${phrase()} ${thing()} til ${phrase()}`,
  () => `${phrase()} ${thing()} and ${thing()}, ${phrase()} in ${place()}`,
  () => `${person()} ${phrase()} ${thing()} in ${place()}, but ${person()} ${phrase()}`,
  () => `${opener()} ${thing()}, ${phrase()}, ${person()} ${phrase()} in ${place()}`,
  () => `${person()} and ${person()} in ${place()}, ${phrase()} ${thing()}, ${phrase()}`,
  () => `${phrase()}, ${opener()} ${thing()} in ${place()} and ${person()} ${phrase()}`,
  () => `${opener()} ${person()} ${phrase()} while ${phrase()} ${thing()} in ${place()}`,
  () => `${person()} ${phrase()} ${thing()} but ${person()} ${phrase()} ${thing()}`,
  () => `${opener()} ${thing()} in ${place()} but ${phrase()} ${thing()}`,
  () => `${person()} in ${place()} but ${person()} in ${place()}`,
  () => `${phrase()} ${thing()} but ${phrase()} ${place()}`,
  () => `${person()} ${phrase()} ${thing()} instead of ${thing()}`,
  () => `${opener()} ${thing()} in ${place()} instead of ${place()}`,
  () => `${person()} in ${place()} instead of ${place()}`,
  () => `${phrase()} ${thing()} instead of ${phrase()} ${thing()}`,
  () => `${person()} ${phrase()} ${person()} instead of ${person()}`,
  () => `${person()} ${phrase()} in between ${place()} and ${place()}`,
  () => `${thing()} in between ${place()} and ${place()}`,
  () => `${opener()} ${thing()} in between ${thing()} and ${thing()}`,
  () => `${person()} in between ${person()} and ${person()}, ${phrase()}`,
  () => `${person()} ${phrase()} around ${place()}`,
  () => `${opener()} ${thing()} around ${place()}`,
  () => `${person()} ${phrase()} around ${person()} and ${person()}`,
  () => `${thing()} ${phrase()} around ${place()}, ${phrase()}`,
  () => `${person()} ${phrase()} around ${thing()} in ${place()}`,
  () => `${person()} ${phrase()} ${thing()} unless ${person()} ${phrase()}`,
  () => `${opener()} ${thing()} in ${place()} unless ${phrase()}`,
  () => `${phrase()} ${thing()} unless ${person()} ${phrase()} ${thing()}`,
  () => `${person()} in ${place()} unless ${phrase()}`,
  () => `${person()} ${phrase()} ${thing()} despite ${phrase()}`,
  () => `${opener()} ${thing()} in ${place()} despite ${person()}`,
  () => `${person()} ${phrase()} in ${place()} despite ${thing()}`,
  () => `${phrase()} ${thing()} despite ${person()} ${phrase()}`,
  () => `${opener()} ${person()} ${phrase()} despite ${thing()} in ${place()}`,
  () => `${person()} ${phrase()} ${thing()} instead of ${thing()}, ${phrase()}`,
  () => `${opener()} ${thing()} in between ${place()} and ${place()}, ${phrase()} ${person()}`,
  () => `${person()} ${phrase()} around ${place()} unless ${phrase()}`,
  () => `${opener()} ${person()} ${phrase()} ${thing()} despite ${place()}`,
  () => `${phrase()}, ${person()} ${phrase()} ${thing()} but ${person()} ${phrase()} ${place()}`,
  () => `${person()} in between ${place()} and ${place()}, ${phrase()} ${thing()}`,
];

  const terminators = ['.', '.', '.', '?', '.', '.', '.', '!', '?!'];
  const terminator = () => pick(terminators);
  const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);

  const sentence = () => `${capitalize(pick(templates)())}${terminator()}`;

  const paragraph = (sentenceCount) =>
    Array.from({ length: sentenceCount }, sentence).join(' ');

  const output = (paragraphCount, sentenceCount) =>
    Array.from({ length: paragraphCount }, () => paragraph(sentenceCount));

  return { output };
};