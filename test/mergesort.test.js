const MergeSort = require('../lib/Merge Sort/Merge Sort').default;
var assert = require('assert');

describe("Merge sort", () => {
    it("verify merge sort", () => {

        let arg = [10, 2, 20, 5, 1, 2001, 3]
        MergeSort(arg, 0, arg.length - 1);

        assert.strictEqual(JSON.stringify(arg), "[1,2,3,5,10,20,2001]");
    })
})



