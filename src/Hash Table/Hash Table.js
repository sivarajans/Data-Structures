/*
HashTable - is a way order data in an memory using the hash function and key.
Seperate chaining implementation
*/
import LinkedList from '@sivarajans/linked-list';

export default class HashTable {
    constructor(maxLength) {
        this.elements = [];
        this.maxLength = maxLength || 100;
    }

    add(key, value) {
        let targetIndex = this.hash(key);
        if (this.elements[targetIndex] == null)
            this.elements[targetIndex] = { key, value };
        else this._seperateChaining(targetIndex, key, value);
    }

    remove(key) {
        let index = this.hash(key);
        if (this.elements[index] == null) return false;

        if (this.elements[index] instanceof LinkedList) {
            let node = this._findMatchingLinkedListNode(index, key);
            if (node != null) {
                this.elements[index].remove(node);
                return true;
            }
        } else {
            if (this.elements[index].key == key) {
                this.elements[index] = null;
                return true;
            }
        }
        return false;
    }

    _findMatchingLinkedListNode(index, key) {
        let currentNode = this.elements[index].head;
        while (currentNode != null) {
            if (currentNode.data.key == key) {
                return currentNode;
            }
            currentNode = currentNode.next;
        }
        return null;
    }

    find(key) {
        let index = this.hash(key);
        if (this.elements[index] == null) return null;
        else if (this.elements[index] instanceof LinkedList) {
            let node = this._findMatchingLinkedListNode(index, key);
            if (node == null) return null;
            return node.data;
        } else {
            if (this.elements[index].key == key)
                return this.elements[index];
            else return null;
        }
    }

    hash(key) {
        return (isNaN(key) ? (key.length ?? 0) : parseInt(key)) % this.maxLength;
    }

    _seperateChaining(index, key, value) {
        if (this.elements[index] instanceof LinkedList) {
            this.elements[index].add({ key, value });
        } else {
            let ll = new LinkedList();
            ll.add(this.elements[index]);
            ll.add({ key, value });
            this.elements[index] = ll;
        }
    }
}


