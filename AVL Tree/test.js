import SelfBalancedTree from './AVL Tree Or Self Balancing Binary Tree';
/*------------------------------------
TESTING AREA.
------------------------------------*/
// 1. right right case.
let tree1 = new SelfBalancedTree();
tree1.add(new TreeNode(10));
tree1.add(new TreeNode(12));
tree1.add(new TreeNode(5));
tree1.add(new TreeNode(11));
tree1.add(new TreeNode(14));
tree1.add(new TreeNode(18));
tree1.add(new TreeNode(13));
console.log(tree1);


// 2. left left case.
let tree2 = new SelfBalancedTree();
tree2.add(new TreeNode(10));
tree2.add(new TreeNode(12));
tree2.add(new TreeNode(7));
tree2.add(new TreeNode(9));
tree2.add(new TreeNode(5));
tree2.add(new TreeNode(6));
tree2.add(new TreeNode(1));
console.log(tree2);


// 3. left right case.
let tree3 = new SelfBalancedTree();
tree3.add(new TreeNode(12));
tree3.add(new TreeNode(15));
tree3.add(new TreeNode(8));
tree3.add(new TreeNode(10));
tree3.add(new TreeNode(6));
tree3.add(new TreeNode(9));
tree3.add(new TreeNode(11));
console.log(tree3);

// 4. right left case.
let tree4 = new SelfBalancedTree();
tree4.add(new TreeNode(10));
tree4.add(new TreeNode(5));
tree4.add(new TreeNode(16));
tree4.add(new TreeNode(17));
tree4.add(new TreeNode(14));
tree4.add(new TreeNode(12));
tree4.add(new TreeNode(15));
console.log(tree4);


// big tree case.
let tree = new SelfBalancedTree();
tree.add(new TreeNode(30));
tree.add(new TreeNode(25));
tree.add(new TreeNode(41));
tree.add(new TreeNode(20));
tree.add(new TreeNode(26));
tree.add(new TreeNode(35));
tree.add(new TreeNode(48));
tree.add(new TreeNode(10));
tree.add(new TreeNode(21));
tree.add(new TreeNode(33));
tree.add(new TreeNode(36));
tree.add(new TreeNode(51));
tree.add(new TreeNode(58));
tree.add(new TreeNode(60));
console.log(tree);
