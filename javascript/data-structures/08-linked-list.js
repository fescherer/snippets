/*

    LINKED LIST

    - Linear data structure that includes a series of connected nodes
    - Each node consists of a data value and a pointer that points to the neext node
    - The list elements can be easialy inserteed or removed without reallocation or reorganization of the entire structure
    - Random access of elements is not feasible and accessing an element has linear time complexity
    
    - Operations:
     - Insertion: Add element at the beginning, end or at a given index
     - Deletion: Remove an item given its index or value
     - Search: Find an element given its value

    Usage:
    - All applications of both stacks and queues are applications of linked lists
    - Image Viewer
*/

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }

    isEmpty() {
        return this.size === 0
    }

    getSize() {
        return this.size
    }

    // O(n)
    prepend(value) {
        const node = new Node(value)
        if(!this.isEmpty()) node.next = this.head
        this.head = node
        this.size++
    }

    // O(n)
    append(value) {
        const node = new Node(value)
        if(this.isEmpty()) {
            this.head = node
        } else {
            let prev = this.head
            while(prev.next) {
                prev = prev.next
            }
            prev.next = node
        }
        this.size++
    }

    insert(value, index) {
        if(index < 0 || index > this.size) {
            return
        }else if(index === 0) {
            this.prepend(value)
        } else {
            const node = new Node(value)
            let prev = this.head
            for(let i=0; i < index-1; i++) {
                prev = prev.next
            }
            node.next = prev.next
            prev.next = node
            this.size++
        }
    }

    removeFrom(index) {
        if(index < 0 || index >= this.size) {
            return null
        } 

        let removeNode
        if(index === 0) {
            removeNode = this.head
            this.head = this.head.next
        } else {
            let prev = this.head
            for(let i = 0; i < index - 1; i++) {
                prev = prev.next
            }
            removeNode = prev.next
            prev.next = removeNode.next
        }
        this.size--
        return removeNode.value
    }

    print() {
        if(this.isEmpty()) {
            console.log('List is empty')
        } else {
            let curr = this.head
            let listValues = ''
            while(curr) {
                listValues += `${curr.value} `
                curr = curr.next
            }
            console.log(listValues)
        }
    }
}


const list = new LinkedList()
console.log('List is empty?', list.isEmpty())
console.log('List size', list.getSize())
list.prepend(10)
list.prepend(5)
list.prepend(20)
list.print()

list.append(222)
list.print()

list.insert(34,4)
list.print()

list.insert(345,3)
list.print()

console.log(list.removeFrom(1))
list.print()