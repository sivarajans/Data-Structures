const AVL = require('./AVL Tree/AVL Tree Or Self Balancing Binary Tree');
const BST = require('./Binary Search Tree/Binary Search Tree');
const Bubble = require('./Bubble Sort/Bubble Sort').default;
const Fenwick = require('./Fenwick Tree/Fenwick Tree').default;
const Hash = require('./Hash Table/Hash Table').default;
const MinHeap = require('./HeapSort Asc by MinHeap/HeapSort Asc by MinHeap').default;
const MaxHeap = require('./HeapSort Desc by MaxHeap/HeapSort Desc by MaxHeap').default;
const Insertion = require('./Insertion Sort/Insertion Sort').default;
const LinkedList = require('./Linked List/Linked List').default;
const MergeSort = require('./Merge Sort/Merge Sort').default;
const Queue = require('./Queue/Queue').default;
const QuickSort = require('./Quick Sort/Quick Sort').default;
const Radix = require('./Radix Sort/Radix Sort').default;
const SelectionSort = require('./Selection Sort/Selection Sort').default;

module.exports = {
    AVLTree: AVL.default,
    AVLTreeNode: AVL.TreeNode,
    BST: BST.default,
    BSTNode: BST.TreeNode,
    BubbleSort: Bubble,
    FenwickTree: Fenwick,
    HashTable: Hash,
    MinHeapAscSort: MinHeap,
    MaxHeapDescSort: MaxHeap,
    InsertionSort: Insertion,
    LinkedList: LinkedList,
    MergeSort: MergeSort,
    Queue: Queue,
    QuickSort: QuickSort,
    RadixSort: Radix,
    SelectionSort: SelectionSort
}

// Exported all the available structures here.