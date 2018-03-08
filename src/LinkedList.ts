import neverHere from './neverHere';

class LLNode {
  private m_item: any;
  private m_next: LLNode;

  constructor(item: any, next: LLNode = undefined) {
    this.m_item = item;
    this.m_next = next;
  }

  get item(): any {
    return this.m_item;
  }

  setNext(next: LLNode) {
    this.m_next = next;
  }

  get next(): LLNode | undefined {
    return this.m_next;
  }
}

export default class LinkedList<T> {
  private m_head: LLNode;
  private m_tail: LLNode;
  private m_size: number = 0;

  /**
   * O(1)
   */
  peekHeadItem(): T {
    return this.m_head && this.m_head.item;
  }

  /**
   * O(1)
   */
  peekTailItem(): T {
    return this.m_tail && this.m_tail.item;
  }

  /**
   * O(1)
   * @param item 
   */
  addToHead(item: T) {
    let newNode: LLNode = new LLNode(item);

    if (this.isEmpty()) {
      this.m_head = newNode;
      this.m_tail = newNode;
    } else {
      newNode.setNext(this.m_head);
      this.m_head = newNode;
    }

    this.m_size++;
  }

  /**
   * O(1)
   * @param item 
   */
  addToTail(item: T) {
    let newNode: LLNode = new LLNode(item);

    if (this.isEmpty()) {
      this.m_tail = newNode;
      this.m_head = newNode;
    } else {
      this.m_tail.setNext(newNode);
      this.m_tail = newNode;
    }

    this.m_size++;
  }

  private removeLastNode(): T {
    let lastNode: LLNode = this.m_head;
    this.m_head = undefined;
    this.m_tail = undefined;
    this.m_size = 0;
    return lastNode.item;
  }

  /**
   * O(1)
   */
  removeFromHead(): T {
    if (this.isEmpty()) return undefined;
    if (this.m_size == 1) { return this.removeLastNode(); }

    let removeNode: LLNode = this.m_head;
    this.m_head = removeNode.next;
    removeNode.setNext(undefined);

    this.m_size--;

    return removeNode.item;
  }

  /**
   * O(n)
   */
  removeFromTail(): T {
    if (this.isEmpty()) return undefined;
    if (this.m_size == 1) { return this.removeLastNode(); }

    for (let node: LLNode = this.m_head; node != undefined; node = node.next) {
      if (node.next == this.m_tail) {
        let removeNode: LLNode = this.m_tail;
        this.m_tail = node;
        node.setNext(undefined);
        this.m_size--;
        return removeNode.item;
      }
    }

    return neverHere();
  }

  isEmpty(): boolean {
    return this.m_size == 0;
  }

  size(): number {
    return this.m_size;
  }
}