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
}

const bst = new BinarySearchTree()

console.log('Tree is empty?', bst.isEmpty())

bst.insert(10)
bst.insert(500)
bst.insert(5)