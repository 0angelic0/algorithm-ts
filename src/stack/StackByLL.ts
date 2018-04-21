import Stack from './Stack';
import LinkedList from '../ll/LinkedList';

export default class StackByLL<T> implements Stack<T> {

  private m_ll: LinkedList<T>;

  constructor() {
    this.m_ll = new LinkedList<T>();
  }

  /**
   * O(1)
   */
  peek(): T {
    return this.m_ll.peekHeadItem();
  }

  /**
   * O(1)
   * @param item 
   */
  push(item: T) {
    this.m_ll.addToHead(item);
  }

  /**
   * O(1)
   */
  pop(): T {
    return this.m_ll.removeFromHead();
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