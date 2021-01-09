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
    // TODO: given an object (which itself may contain other objects, return the number of values of type number
}

console.log(`Complexer object had: ${countNumbers(complexerObject)} values of type number`);

