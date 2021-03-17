
const RadixSort = require('../lib/Radix Sort/Radix Sort').default;
var assert = require('assert');

describe("Radix sort", () => {
    it("verify radix sort", () => {
        let input = [20, 23, 2, 567, 12, 1, 97, 324333, 25, 15, 3, 8];
        RadixSort(input);
        assert.strictEqual(JSON.stringify(input), "[1,2,3,8,12,15,20,23,25,97,567,324333]");
    })
})
