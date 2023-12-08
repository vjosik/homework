export default class Queue {
  #queue = [];
  #generator = null;
  #inProgress = false;
  #cb = null;

  constructor(cb) {
    if (typeof cb === "function") {
      this.#cb = cb;
    }
  }

  isEmpty() {
    //bool
    return this.#queue.length === 0;
  }

  dequeue() {
    return this.#queue.shift();
  }

  enqueue(task) {
    console.log("---- add task to queue ----", task);

    this.#queue.push(task);

    console.log("---- show all task queue ----", this.#queue);

    if (!this.#inProgress) {
      this.#start();
    }
  }

  next() {
    return this.#generator.next();
  }

  #start() {
    console.log("---- call start ----");
    this.#inProgress = true;
    this.#generator = this.#process();
    this.next();
  }

  #finish() {
    console.log("---- call finish ----");

    this.#inProgress = false;
    this.#generator = null;
  }

  *#process() {
    console.log("---- start process ----");

    while (!this.isEmpty()) {
      const task = this.dequeue(); // { type: .., message: ... }
      task.message += " " + this.#queue.length;
      console.log("---- dequeue task ==>  ----", task);
      this.#cb(task);
      console.log("---- task list ==>  ----", this.#queue);
      yield;
    }

    this.#finish();
  }
}
