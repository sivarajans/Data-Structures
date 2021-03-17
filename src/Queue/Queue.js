/*
Queue - is a data structure that helps to take first in first out. (FIFO)

Below is the implementation of queue using array.
*/

export default class Queue {
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

