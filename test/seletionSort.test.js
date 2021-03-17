const SelectionSort = require('../lib/Selection Sort/Selection Sort').default;
var assert = require('assert');

describe("Selection sort", () => {
    it("verify selection sort", () => {
        let input = [20, 23, 2, 567, 12, 1, 97];
        SelectionSort(input);
        
        assert.strictEqual(JSON.stringify(input), "[1,2,12,20,23,97,567]");
    })
})


