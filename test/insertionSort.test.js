
const InsertionSort = require('../lib/Insertion Sort/Insertion Sort').default;
var assert = require('assert');

describe("Insertion Sort", () => {
    it("verify insertion sort", () => {
        let input = [20, 23, 2, 567, 12, 1, 97];
        InsertionSort(input);        
        assert.strictEqual(JSON.stringify(input), "[1,2,12,20,23,97,567]");
    })
})

