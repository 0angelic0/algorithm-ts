import Stack from './Stack';

export default class StackByArray<T> implements Stack<T> {

  private m_items: T[];

  constructor() {
    this.m_items = [];
  }

  /**
   * O(1)
   */
  peek(): T {
    return this.m_items[this.m_items.length - 1];
  }

  /**
   * O(1)
   * @param item 
   */
  push(item: T) {
    this.m_items.push(item);
  }

  /**
   * O(1)
   */
  pop(): T {
    return this.m_items.pop();
  }

  /**
   * O(1)
   */
  isEmpty(): boolean {
    return this.m_items.length == 0;
  }
  
  /**
   * O(1)
   */
  size(): number {
    return this.m_items.length;
  }
}