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
  ];

  const terminators = ['.', '.', '.', '.', '.', '.', '?', '!', '?!'];
  const terminator = () => pick(terminators);
  const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);

  const sentence = () => `${capitalize(pick(templates)())}${terminator()}`;

  const paragraph = (sentenceCount) =>
    Array.from({ length: sentenceCount }, sentence).join(' ');

  const output = (paragraphCount, sentenceCount) =>
    Array.from({ length: paragraphCount }, () => paragraph(sentenceCount));

  return { output };
};