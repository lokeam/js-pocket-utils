# Requirements
Making an async request queue

1. Create a queue (will use an array for simplicity here then optimize later).
   This queque will be full of tasks.
2. Input a promise factory into queue
3. When promise factory is called, the task on the queue is executed
4. There may only be 3 tasks running at any time


# Notes:
## Queue
- FIFO DS
- 2 methods enqueue + dequeue
- Enqueue task:
  -- if limit below 3, increment counter limit by 1, execute task
  -- Push the task to our queue
  -- Check to see if there is anything else on the queue



## Factory
- Function that returns a new object or function every time its called.

## Async Code
- Each task needs to be non-blocking



