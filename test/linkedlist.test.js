const LinkedList = require('../lib/Linked List/Linked List').default;
var assert = require('assert');

describe("Linked List", () => {
    it("verify linked list", () => {

        let ll = new LinkedList();

        ll.add(3);
        ll.add(5);
        assert.strictEqual(ll.size, 2);
        assert.strictEqual(ll.head.data, 3);
        assert.strictEqual(ll.tail.data, 5);
    })
})

