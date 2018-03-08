import Queue from './Queue';
import LinkedList from './LinkedList';

export default class QueueByLL<T> implements Queue<T> {

  private m_ll: LinkedList<T> = new LinkedList<T>();

  enqueue(item: T) {
    this.m_ll.addToHead(item);
  }

  dequeue(): T {
    return this.m_ll.removeFromTail();
  }

  peek(): T {
    return this.m_ll.peekTailItem();
  }

  isEmpty(): boolean {
    return this.m_ll.isEmpty();
  }

  size(): number {
    return this.m_ll.size();
  }
}