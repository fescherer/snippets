const LinkedList = require('./09-linked-list-with-tail')

class LinkedListQueue {
    constructor() {
        this.list = new LinkedList()
    }

    enqueue(value) {
        this.list.append(value)
    }

    dequeue() {
        return this.list.removeFromFront()
    }

    peek() {
        return this.list.head.value
    }

    isEmpty() {
        return this.list.isEmpty()
    }

    getSize() {
        return this.list.getSize()
    }

    print() {
        this.list.print()
    }
}

const queue = new LinkedListQueue()
console.log('Is empty', queue.isEmpty())

queue.enqueue(20)
queue.enqueue(10)
queue.enqueue(3)

console.log(queue.getSize())
queue.print()

console.log(queue.dequeue())
console.log(queue.peek())