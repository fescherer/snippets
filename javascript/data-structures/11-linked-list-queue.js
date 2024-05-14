const LinkedList = require('./09-linked-list-with-tail')

class LinkedListStack {
    constructor() {
        this.list = new LinkedList()
    }

    push(value) {
        this.list.prepend(value)
    }

    pop() {
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

const stack = new LinkedListStack()
console.log('Is empty', stack.isEmpty())

stack.push(20)
stack.push(10)
stack.push(3)

console.log(stack.getSize())
stack.print()

console.log(stack.pop())
console.log(stack.peek())