 
## B-Tree
It is a self balacning binary search tree, allows insertion, deletion, reading all in log(n) time.  
Used in disk storage, database storage and bulk storage requirements.  
`B+ Tree` - addition to the b-tree, b+ tree will have all the keys in leaf node, maintaining search indexes in root and internal nodes.

### Properties
1. Can have multiple _key_ in same node.
2. Each _key_ will have left and right child.   
For example  `[|1|2|3|]` - here `|` - denotes child link. `digits` denotes keys.  
Note 2's left child and 1's right child are same.
3. B tree also should satisify following conditions.  
Assume `m` is Order of B-Tree.  
Maximum Keys = `m - 1`   
Maximum Children = `m`   
Minimum Keys = `floor(m/2) - 1`  
Minimum Children = `floor(m/2)`  
`Root` can have 1 key as miniumum  

### Deletion Rules
#### If Node is Leaf node
1. delete directly if min key satisfied. 
2. borrow from left or right sibling if min key not satisifed in same node.
3. when either left or right dont have min keys, merge either with left or right, with its parent and delete tht target, as (m/2)-1 is min keys, it would get max key allowed.
But check if parent has min keys, if not follow step2. if not merge with parent recursively until satisified.
#### If Node is Internal node
1. take in order predecessor or in order successor if min keys satisfied with child.
2. if not, merge with parent like step 3 in leaf node case.
note - when bubbles to parent in the case of minkey not satisified, merge would be required through parent, then link the child also correctly.
#### If Node is Root node
If multiple key present, just remove request key, otherwise take inorder predecessor/successor from hierarchy and replace.

