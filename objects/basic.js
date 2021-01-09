// Video timestamp: https://youtu.be/DMIZ9Oto-6s?t=620

// Object literal
let basicObject = {
    "someNumber": 1,
    "someString": "foo",
};

// Accessing values
let num = basicObject.someNumber;         // 1
let alsoNum = basicObject["someNumber"];  // 1

let str = basicObject.someString;         // "foo"
let alsoStr = basicObject["someString"];  // "foo"

// Setting values
basicObject.someNumber = 2;               // Now basicObject = { "someNumber" : 2, "someString" : "foo" }
basicObject["someString"] = "bar";        // Now basicObject = { "someNumber" : 2, "someString" : "bar" }

