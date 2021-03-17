const HeapSort = require('../lib/HeapSort Asc by MinHeap/HeapSort Asc by MinHeap').default;

var assert = require('assert');

describe("HeapSort", () => {
    it("verify heap sort by min heap", () => {

        let givenTree = [44, 22, 34, 66, 33, 17, 1, 0, 5];
        let sorted = HeapSort(givenTree);
        assert.strictEqual(JSON.stringify(sorted), "[0,1,5,17,22,33,34,44,66]");
    })
})





