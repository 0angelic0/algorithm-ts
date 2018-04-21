export default class PriorityQueue {
  private m_pq: number[]; // heap ordered complete binary tree, pq[0] unused.
  private m_n: number;

  constructor(maxN: number) {
    this.m_pq = new Array<number>(maxN + 1);
    this.m_n = 0;
  }

  isEmpty(): boolean {
    return this.m_n == 0;
  }

  size(): number {
    return this.m_n;
  }

  insert(key: number) {
    // Place to last and let it swim up.
    this.m_n++;
    this.m_pq[this.m_n] = key;
    this.swim(this.m_n); // Restore heap
  }

  popMax(): number {
    let max: number = this.m_pq[1]; // Retrieve max from top
    this.swap(1, this.m_n);         // swap last item to new top
    this.m_pq[this.m_n] = undefined; // avoid loitering
    this.m_n--;
    this.sink(1); // Restore heap
    return max;
  }

  swim(k: number) {
    let parentK: number 
    while (k > 1) {
      parentK = Math.floor(k/2);
      if (this.m_pq[parentK] < this.m_pq[k]) {
        this.swap(k, parentK);
        k = parentK;
      } else break;
    }
  }

  sink(k: number) {
    let leftChildK: number;
    let rightChildK: number;
    let isLeftLargerThanK: boolean;
    let isRightLargerThanK: boolean;
    while (k*2 <= this.m_n) {
      leftChildK = k*2;
      rightChildK = k*2 + 1;
      isLeftLargerThanK = this.m_pq[leftChildK] > this.m_pq[k];
      isRightLargerThanK = this.m_pq[rightChildK] > this.m_pq[k];
      if (isLeftLargerThanK && !isRightLargerThanK) { // Only left larger than k
        this.swap(leftChildK, k);
        k = leftChildK;
      } else if (isRightLargerThanK && !isLeftLargerThanK) { // Only right larger than k
        this.swap(rightChildK, k);
        k = rightChildK;
      } else if (isLeftLargerThanK && isRightLargerThanK) { // Both left and right larger than k
        if (this.m_pq[leftChildK] > this.m_pq[rightChildK]) { // Left is the largest
          this.swap(leftChildK, k);
          k = leftChildK;
        } else { // Right is the largest or left equal right
          this.swap(rightChildK, k);
          k = rightChildK;
        }
      } else { // K is already largest
        break;
      }
    }
  }

  swap(i: number, j: number) {
    let temp: number = this.m_pq[i];
    this.m_pq[i] = this.m_pq[j];
    this.m_pq[j] = temp;
  }
}