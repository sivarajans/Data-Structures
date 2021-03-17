
const Queue = require('../lib/Queue/Queue').default;
var assert = require('assert');

describe("Queue", () => {
    it("verify queue", () => {

        let queue = new Queue();
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);

        assert.strictEqual(queue.dequeue(), 1);
        assert.strictEqual(queue.dequeue(), 2);
    })
})


