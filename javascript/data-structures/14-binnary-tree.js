/*

    GENERIC TREE
    - Hierarchical data structure that consists of nodes connected by edges
    - Non linear data structure, compared to array, linked lists, stacks and queue
    - Linear data structure time is proportional do size of data set, so in tree the time is not proportional, being quicker
    - Will not contain any loops or cycles

    BINARY TREE
    - Data structure in which each node has at most two children- left and right child

    BINARY SEARCH TREE
    - Binary tree that:
        - Value of each left node must be smaller than the parent node
        - Value of each right node must be greater than the parent node

*/

class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    isEmpty() {
        return this.root === null
    }

    insert(value) {
        const node = new Node(value)
        if(this.isEmpty()) {
            this.root = node
        } else {
            this.insertNode(this.root, node)
        }
    }

    insertNode(root, node) {
        if(node.value < root.value) {
            if(root.left === null) {
                root.left = node
            } else {
                this.insertNode(root.left, node)
            }
        } else {
            if(root.right === null) {
                root.right = node
            } else {
                this.insertNode(root.right, node)
            }
        }
    }
  
    search(root, value) {
        if(!root) {
            return false
        } else {
            if(root.value === value) {
                return true
            } else if(value < root.value) {
                return this.search(root.left, value)
            } else {
                return this.search(root.right, value)
            }
        }
    }

    // Tree Traversal- 2 types- Depth First Search (DFS) and Breadth First Search (BFS)
    
    // DFS
    // Start at the root and explores as far as possible until branch comes to end
    // 3 types- Preorder, Inorder and Postorder- which order is exploring, right-left, left-right etc
    dfsPreOrder(root) {
        // Read the data from node
        // Visit left subtree
        // Visit right subtree
        if(root) {
            console.log(root.value)
            this.dfsPreOrder(root.left)
            this.dfsPreOrder(root.right)
        }
    }

    dfsInOrder(root) {
        // Visit the left subtree
        // Read the data from node
        // Visit the right subtree
        if (root) {
            this.dfsInOrder(root.left)
            console.log(root.value)
            this.dfsInOrder(root.right)
        }
    }

    dfsPostOrder(root) {
        // Visit left subtree
        // Visit right subtree
        // Read the data from node
        if(root) {
            this.dfsPostOrder(root.left)
            this.dfsPostOrder(root.right)
            console.log(root.value)
        }
    }

    // BFS
    // Create a queue
    // Enqueue the root node
    // As long as a node exists in the queue
    //  - Dequeue the node from the front
    //  - Read the node's value
    //  - Enqueue the node's left child if it exists
    //  - Enqueue the node's right child if it exists
    bfs() {
        const queue = []
        queue.push(this.root)
        while(queue.length) {
            let curr = queue.shift()
            console.log(curr.value)
            if(curr.left) {
                queue.push(curr.left)
            }
            if(curr.right) {
                queue.push(curr.right)
            }
        }
    }

    min(root) {
        // The minimum value will be the leaf at leftest
        if(!root.left) {
            return root.value
        } else {
            return this.min(root.left)
        }
    }

    max(root) {
        // The maximum value will be the leaf at rightest
        if(!root.right) {
            return root.value
        } else {
            return this.max(root.right)
        }
    }

    delete(value) {
        this.root = this.deleteNode(this.root, value)    
    }

    deleteNode(root, value) {
        if(root === null) {
            return root
        }
        if(value < root.value) {
            root.left = this.deleteNode(root.left, value)
        } else if(value > root.value) {
            root.right = this.deleteNode(root.right, value)
        } else {
            if(!root.left && !root.right) {
                return null
            }
            if(!root.left) {
                return root.right
            } else if (!root.right) {
                return root.left
            }
            root.value = this.min(root.right)
            root.right = this.deleteNode(root.right, root.value)
        }
        return root
    }
}

const bst = new BinarySearchTree()

console.log('Tree is empty?', bst.isEmpty())

bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.insert(7)

// bst.dfsPreOrder(bst.root)
// bst.dfsInOrder(bst.root)
// bst.dfsPostOrder(bst.root)
// bst.bfs()
// console.log(bst.min(bst.root))
// console.log(bst.max(bst.root))

bst.delete(15)
bst.bfs()