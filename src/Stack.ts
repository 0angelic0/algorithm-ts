export default interface Stack<T> {
  peek(): T;
  push(item: T): void;
  pop(): T;
  isEmpty(): boolean;
  size(): number;
}