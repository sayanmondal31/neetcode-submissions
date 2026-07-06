class MinStack {
 private readonly stack: number[];
  private readonly minStack: number[];
 

  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push(val: number) {
    this.stack.push(val);

 val = Math.min(
            val,
            this.minStack.length === 0
                ? val
                : this.minStack[this.minStack.length - 1],
        );
    this.minStack.push(val);
  }

  pop() {
    this.stack.pop();
    this.minStack.pop();
  }

  top(): number {
    return this.stack[this.stack.length - 1];
  }

  getMin(): number {
    return this.minStack[this.minStack.length - 1];
  }
}
