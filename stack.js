// push
// pop
// peek
// isEmpty
// size
// Last in First out LIFO   OR First in Last out FILO 

class Stack {
    constructor() {
        this.stack = [];
    }
    push(element) {
        this.stack.push(element);
    }
    pop() {
        if(this.isEmpty()) return "stack is empty";
        return this.stack.pop();
    }
    peek() {
        if(this.isEmpty()) return "stack is empty";
        return this.stack[this.size() - 1];
    }
    isEmpty() {
        return this.size() === 0;
    }
    size() {
        return this.stack.length;
    }

    printSatck() {
        return this.stack;
    }
}

const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.printSatck());
console.log(stack.size());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.peek());
console.log(stack.isEmpty());