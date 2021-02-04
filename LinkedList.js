class LinkedListNode {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    add(data) {
        let newNode = new LinkedListNode(data, null);
        if (this.head == null) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
    }

    remove(node) {

        let current = this.head;
        let prev = null;

        while (current) {
            if (current === node) {

                if (prev == null) this.head = current.next; // head removal

                else prev.next = current.next; // mid removal

                if (current.next == null) { // tail removal
                    prev.next = null;
                    this.tail = prev;
                }

                this.size--;

                return true;
            }
            else {
                prev = current;
                current = current.next;
            }
        }

        return false;
    }

    indexOf(node) {
        let index = -1;
        let current = this.head;
        while (current) {
            if (current === node)
                return ++index;
            else {
                current = current.next;
                index++;
            }
        }
        return -1;
    }

    addFirst(data) {
        if (this.size == 0) this.add(data);
        else {
            let newNode = new LinkedListNode(data, this.head);
            this.head = newNode;
            this.size++;
        }
    }

    addAtIndex(data, index) {
        this.isValidIndex(index);

        // move until index
        if (index == 0) this.addFirst(data);

        let leftNode = this.head;

        while (index > 1) {
            leftNode = leftNode.next;
            index--;
        }
        leftNode.next = new LinkedListNode(data, leftNode.next);
        this.size++;
    }

    removeAtIndex(index) {
        this.isValidIndex(index);

        let toRemove = this.head;
        while(index > 0) {
            toRemove = toRemove.next;
            index--;
        }
        this.remove(toRemove);
    }

    isValidIndex(index){
        if (index < 0 || index >= this.size) throw new Error('invalid index');
    }
}
