const BubbleSort = require('../lib/Bubble Sort/Bubble Sort').default;
var assert = require('assert');
describe("BubbleSort", () => {
    it("Verify bubble sort result", () => {
        let input = [20, 23, 2, 567, 12, 1, 97, 25, 15, 3, 8];

        let it = BubbleSort(input);

        assert.strictEqual(JSON.stringify(input), "[1,2,3,8,12,15,20,23,25,97,567]");

        // iteration taken"
        assert.strictEqual(it, 8);

    });
})

