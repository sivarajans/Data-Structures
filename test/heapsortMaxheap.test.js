
const HeapSortDesc = require('../lib/HeapSort Desc by MaxHeap/HeapSort Desc by MaxHeap').default;
var assert = require('assert');

describe("HeapSort", () => {
    it("verify heap sort by max heap", () => {

        let givenTree = [15, 5, 20, 1, 17, 10, 30];
        let sorted = HeapSortDesc(givenTree);
        assert.strictEqual(JSON.stringify(sorted), "[30,20,17,15,10,5,1]");
    })
})

