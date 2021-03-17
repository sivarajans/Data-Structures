const FenWickTree = require('../lib/Fenwick Tree/Fenwick Tree').default;
var assert = require('assert');
//Testing

describe("Fenwick Tree", () => {
    it("verify fenwick", () => {
        let source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        let tree = new FenWickTree(source);

        tree.add(5, 5);
        tree.add(7, 2);

        tree.set(8, 5);
        tree.set(6, 3);

        assert.strictEqual("[0,1,3,3,10,10,13,9,37,9,19]", JSON.stringify(tree.fenwick));
    });
});

