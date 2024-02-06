import { AsyncRequestQueue } from './asyncReqQueue.js';

// create an instance of queue
const queue = new AsyncRequestQueue();

const generateRandomNumber = (min, max) => {
  return Math.max(Math.random() * (max - min + 1) + min)
}


// create promise factory, return promise
function fancyPromiseFactory(index) {
  return async () => {

    // simulate some work within the promise
    const delay = generateRandomNumber(1000, 3000);

    console.log(`Running task ${index} - waiting for ${delay / 1000} seconds`);
    await new Promise(resolve => setTimeout(resolve, delay));

    console.log(`Completed task ${index}`);
  }
}

// add promises to queue
queue.enqueue(fancyPromiseFactory(1));
queue.enqueue(fancyPromiseFactory(2));
queue.enqueue(fancyPromiseFactory(3));
queue.enqueue(fancyPromiseFactory(4));
queue.enqueue(fancyPromiseFactory(5));
queue.enqueue(fancyPromiseFactory(6));
queue.enqueue(fancyPromiseFactory(7));
queue.enqueue(fancyPromiseFactory(8));