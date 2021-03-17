
import BinarySearchTree from '../src/Binary Search Tree/Binary Search Tree';

let tree = new BinarySearchTree([5, 9, 3, 2, 4, 7, 8, 6, 11, 13, 18]);

console.log('initial', JSON.parse(JSON.stringify(tree)));

tree.add(new TreeNode(23));
tree.remove(tree.root.right);
console.log('23 added, 9 removed', JSON.parse(JSON.stringify(tree)));

tree.addByValue(1);
tree.removeByValue(11);
console.log('1 added, 11 removed', JSON.parse(JSON.stringify(tree)));