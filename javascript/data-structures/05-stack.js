/*

    STACK

    A stack data structure is a sequential collection of elements that follows the principle of Last In, First Out (LIFO).

    The last element inserted into the stack is the first element to be removed.

    A stack of plates. The last plate added is the first plate removed from the stack.

    A stack is an abstract data type. It is defined by its behavior rather than being a mathematical model.

    The Stack data structure supports two main operations:
        Push, which adds an element to the collection
        Pop, which removes the most recently added element from the collection


    Stack Usage: 
    - Browser history tracking
    - Undo operation when typing
    - Expression conversions
    - Call stack in JavaScript runtime

*/

/* ARRAY IMPLEMENTATION */

class Stack {
    constructor() {
      this.items = [];
    }
  
    push(element) {
      this.items.push(element);
    }
  
    pop() {
      return this.items.pop();
    }
  
    peek() {
      return this.items[this.items.length - 1];
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    size() {
      return this.items.length;
    }
  
    print() {
      console.log(this.items.toString());
    }
  }
  
  const stack = new Stack();
  console.log(stack.isEmpty());
  stack.push(20);
  stack.push(10);
  stack.push(30);
  console.log(stack.size());
  stack.print();
  console.log(stack.pop());
  console.log(stack.peek());
  stack.print();


  /* OBJECT IMPLEMENTATION - O(1) */

  class Stack {
    constructor() {
      this.items = {};
      this.head = 0;
    }
  
    push(element) {
      this.items[this.head] = element;
      this.head++;
    }
  
    pop() {
      const item = this.items[this.head - 1];
      delete this.items[this.head - 1];
      this.head--;
      return item;
    }
  
    peek() {
      return this.items[this.head - 1];
    }
  
    size() {
      return this.head;
    }
  
    isEmpty() {
      return this.head === 0;
    }
  
    print() {
      console.log(this.items);
    }
  }