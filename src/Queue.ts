export default interface Queue<T> {
  enqueue(item: T): void;
  dequeue(): T;
  peek(): T;
  isEmpty(): boolean;
  size(): number;
}