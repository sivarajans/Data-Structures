import FenWickTree from './Fenwick Tree';
//Testing
let source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let tree = new FenWickTree(source);

tree.add(5, 5);
tree.add(7, 2);

tree.set(8, 5);
tree.set(6, 3);

console.log('fenwick array', tree.fenwick);