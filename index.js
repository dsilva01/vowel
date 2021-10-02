const vowels = ['a', 'e', 'i', 'o', 'u'];

function validate(s) {
  if (typeof s !== 'string') {
    throw new TypeError(`Expected string, received ${typeof s}.`);
  }
}

function isVowel(c) {
  if (c.length > 1) return includesVowel(c);
  validate(c);
  // Add support for accents/diacritics
  return vowels.indexOf(c.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")) !== -1;
}

function y(b) {
  if (b === true) vowels.push('y');
  else if (b === false) vowels.splice(vowels.indexOf('y'), 1);
  return this;
}

function includesVowel(s) {
  validate(s);

  for (let i = 0; i < s.length; i += 1) {
    if (isVowel(s.charAt(i))) return true;
  }
  return false;
}

function startsWithVowel(s) {
  validate(s);
  // Add support for accents/diacritics
  return vowels.some(v => s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").startsWith(v));
}

function endsWithVowel(s) {
  validate(s);
  // Add support for accents/diacritics
  return vowels.some(v => s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").endsWith(v));
}

module.exports = {
  vowels,
  y,
  isVowel,
  includesVowel,
  startsWithVowel,
  endsWithVowel,
};
