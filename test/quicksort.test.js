const QuickSort = require('../lib/Quick Sort/Quick Sort').default;
var assert = require('assert');

describe("Quick sort", () => {
    it("verify quick sort", () => {


        let arg = [10, 2, 20, 5, 1, 2001, 3];
        QuickSort(arg, 0, arg.length - 1);

        assert.strictEqual(JSON.stringify(arg), "[1,2,3,5,10,20,2001]");
    })
})

