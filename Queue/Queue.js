/*
Queue - is a data structure that helps to take first in first out. (FIFO)

Below is the implementation of queue using array.
*/

class Queue {
    constructor(arr) {
        this.entries = arr ?? [];
    }
    enqueue(value) {
        this.entries.push(value);
    }
    dequeue() {
        return this.entries.shift();
    }
}


// Testing
let queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.dequeue());
console.log(queue.dequeue());
