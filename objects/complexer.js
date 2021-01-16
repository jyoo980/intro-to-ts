let basicObject = {
    "someNumber": 1,
    "someString": "foo",
};

let complexObject = {
    "dont": {
        "include": -1,
        "any": { "of": { "these": { "keys": 999 } } }
    },
    "in": 1,
    "your": basicObject,
    "solution.": {
      "Pretend": basicObject,
      "you": "I am not a number",
      "cant": "Nor am I",
      "see": 0
  },
  "them": basicObject
};

let complexerObject = {
  "dont": {
    "include": -1,
    "any": { "of": { "these": { "keys": 999 } } }
  },
  "in": 1,
  "your": [complexObject, "foo", 9],
  "solution.": {
    "Pretend": basicObject,
    "you": "I am not a number",
    "cant": null,
    "see": 0
  },
  "them": complexObject
};

function countNumbers(item) {
    let count = 0;
    if (item === null) {
      return count;
    } else if (Array.isArray(item)) {
      for (const element of item) {
        count += countNumbers(element);
      }
    } else if (typeof item === 'object') {
      for (const val of Object.values(item)) {
        count += countNumbers(val);
      }
    } else if (typeof item === 'number') {
      count++;
    }
    return count;
}

console.log(`Complexer object had: ${countNumbers(complexerObject)} values of type number`);
