function pluralize(noun, num) {
  const irregularNouns = {
    "goose": "geese",
    "sheep": "sheep",

  };
  if (num === 1) {
    return `${num} ${noun}`;
  }

  if (irregularNouns[noun]) {
    return `${num} ${irregularNouns[noun]}`;
  }
  if (noun.endsWith("y")) {
    return `${num} ${noun.slice(0, -1) + "ies"}`;
  }
  if (noun.endsWith("ch")) {
    return `${num} ${noun + "es"}`;
  }
  return `${num} ${noun + "s"}`;
}

console.log(pluralize("goose", 5));
console.log(pluralize("dog", 2));
console.log(pluralize("toffy", 3));
console.log(pluralize("catch", 5));
