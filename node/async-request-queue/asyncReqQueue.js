export class AsyncRequestQueue {
  constructor() {
    this.queue = [];
    this.runningTask = 0;
    this.maxTask = 3;
  }

  // enqueue and return a promise factory
  enqueue(promiseFactory) {
    const task = async () => {
      this.runningTask++;
      try {
        await promiseFactory();
      } finally {
        this.runningTask--;
        this.attemptToRunTask();
      }
    }

    // if we've less than our max tasks, we can execute this task
    if (this.runningTask < this.maxTask) {
      task();
    } else {
      this.queue.push(task);
    }
  }

  // if there are no tasks in the queue, don't do anything.
  // if our max tax is equal to or greater than our running task, return
  attemptToRunTask() {
    if (this.queue.length === 0 || this.runningTask >= this.maxTask) {
      return;
    }

    const nextTask = this.queue.shift();
    nextTask();
  }
};
