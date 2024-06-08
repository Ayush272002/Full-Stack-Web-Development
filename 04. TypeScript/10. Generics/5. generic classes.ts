class Box<T> {
  private content: T;

  constructor(initial: T) {
    this.content = initial;
  }

  getContent(): T {
    return this.content;
  }

  setContent(newCont: T): void {
    this.content = newCont;
  }
}

const stringBox = new Box<string>("Hello, TypeScript");
console.log(stringBox.getContent());

const numberBox = new Box<number>(42);
console.log(numberBox.getContent()); // Outputs: 42
numberBox.setContent(99);
console.log(numberBox.getContent()); // Outputs: 99