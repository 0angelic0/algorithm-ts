import Queue from './Queue';
import LinkedList from '../ll/LinkedList';

export default class QueueByLL<T> implements Queue<T> {

  private m_ll: LinkedList<T> = new LinkedList<T>();

  /**
   * O(1)
   * @param item 
   */
  enqueue(item: T) {
    this.m_ll.addToTail(item);
  }

  /**
   * O(1)
   */
  dequeue(): T {
    return this.m_ll.removeFromHead();
  }

  /**
   * O(1)
   */
  peek(): T {
    return this.m_ll.peekHeadItem();
  }

  /**
   * O(1)
   */
  isEmpty(): boolean {
    return this.m_ll.isEmpty();
  }

  /**
   * O(1)
   */
  size(): number {
    return this.m_ll.size();
  }
}