// Video timestamp: https://youtu.be/DMIZ9Oto-6s?t=765

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

function countNumbers(item) {
    let count = 0;
    if (typeof item === 'object') {
        for (const val of Object.values(item)) {
            count += countNumbers(val);
        }
    } else if (typeof item === 'number') {
        count++;
    }
    return count;
}

console.log(`Complex object had: ${countNumbers(complexObject)} values of type number`);

