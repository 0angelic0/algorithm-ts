import Queue from './Queue';

export default class QueueByArray<T> implements Queue<T> {

  private m_queue: T[] = [];

  enqueue(item: T) {
    this.m_queue.push(item);
  }

  dequeue(): T {
    return this.m_queue.shift();
  }

  peek(): T {
    return this.m_queue[0];
  }

  isEmpty(): boolean {
    return this.size() == 0;
  }

  size(): number {
    return this.m_queue.length;
  }
}