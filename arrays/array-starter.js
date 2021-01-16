// Video timestamp: https://youtu.be/DMIZ9Oto-6s?t=397

// Array literal
const nums = [1, 2, 3, 4];

function doubleElements(arr) {
    // My preferred way of working with arrays
    return arr.map(n => n * 2);
    // let doubled = [];
    // for (const n of arr) {
    //     doubled.push(n * 2);
    // }
    // return doubled;
}

console.log(`Doubling: ${nums} resulted in: ${doubleElements(nums)}`);

// The next code doesn't appear in the video but it's still good practice

function removeLessThanN(arr, n) {
    return arr.filter(num => num >= n);
    // let doubled = [];
    // for (const element of arr) {
    //     if (element > n) {
    //         doubled.push(element);
    //     }
    // }
    // return doubled;
}
