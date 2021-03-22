class BTreeKey {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BTreeNode {
    constructor() {
        this.parent = null;
        this.keys = [];
    }
}
class BTree {
    constructor(order, isLeftBiased) {
        // B tree properties.
        this.order = order;
        this.isLeftBiased = isLeftBiased;
        this.maxChildren = order;
        this.maxKeys = this.maxChildren - 1;
        this.minChildren = Math.floor(this.maxChildren / 2);
        this.minKeys = this.minChildren - 1;

        this.root = [];
        this.size = 0;
    }

    add(data) {
        if (this.root.length == 0) {
            this.root.push(this._createNode(this._createKey(data)))
        } else {
            this._add(data);
        }
        this.size++;
    }

    _add(data) {
        let nodeToAdd = this._findNodeToAdd(this.root, data);

        nodeToAdd.keys.push(this._createKey(data));
        if (nodeToAdd.length < this.maxKeys) {
            this._sortNode(nodeToAdd);
        } else { // more than max keys.
            this._balanceInsertion(nodeToAdd);
        }
    }

    _findNodeToAdd(node, data) {

        if (node.keys.filter(key => key.left != null || key.right != null) == 0) {
            return node; // node is leaf.
        }
        // loop through node to find nearest key
        let nearestKey;
        for (let i = 0; i < node.keys.length - 1; i++) {
            let currentValue = node.keys[i].value;
            if (currentValue < data.value) {
                continue;
            } else {
                nearestKey = node.keys[i];
                // left side node flow
                if (nearestKey.left == null) return node;
                return this._findNodeToAdd(node.keys[i].left);
            }
        }
        if (nearestKey == null) {
            nearestKey = node.keys[node.keys.length - 1];
            // right side node flow
            if (nearestKey.right == null) return node;
            return this._findNodeToAdd(nearestKey.right);
        }
    }


    _createNode(btreeKeysArray, parent) {
        let node = new BTreeNode().keys.push(...btreeKeysArray);
        node.parent = parent;
        return node;
    }
    _createKey({ key, value }) {
        return new BTreeKey(key, value);
    }
    _sortNode(node) {

        for (let i = 0; i < node.keys.length - 2; i++) {
            if (node.keys[i].value > node.keys[i + 1].value) {
                // order mismatch found.
                // TODO
            }
        }

    }

    _balanceInsertion(node) {
        if (node.keys.length > this.maxKeys) {
            let mid = this._getMidIndex();
            let newLeftKeys = node.keys.slice(0, mid - 1);
            let newRightKeys = node.keys.slice(mid + 1);

            let newKey = node.keys.slice(mid, mid);
            newKey.left = this._createNode(newLeftKeys);
            newKey.right = this._createNode(newRightKeys);

            let newNode = this._createNode(newKey);
            newKey.left.parent = newNode;
            newKey.right.parent = newNode;

        }
    }

    _getMidIndex() {
        let isExactMid = (this.maxKeys % 2) == 1 ? true : false;
        let mid = Math.floor(this.maxKeys / 2);
        if (!isExactMid) {
            mid -= (this.isLeftBiased ? 1 : 0);
        }
        return mid;
    }
}