import Stack from './Stack';
import LinkedList from './LinkedList';

export default class StackByLL<T> implements Stack<T> {

  private m_items: LinkedList<T>;

  constructor() {
    this.m_items = new LinkedList<T>();
  }

  /**
   * O(1)
   */
  peek(): T {
    return this.m_items.peekHeadItem();
  }

  /**
   * O(1)
   * @param item 
   */
  push(item: T) {
    this.m_items.addToHead(item);
  }

  /**
   * O(1)
   */
  pop(): T {
    return this.m_items.removeFromHead();
  }

  /**
   * O(1)
   */
  isEmpty(): boolean {
    return this.m_items.isEmpty();
  }
  
  /**
   * O(1)
   */
  size(): number {
    return this.m_items.size();
  }
}