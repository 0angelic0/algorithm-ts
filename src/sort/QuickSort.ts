import Sort from './Sort';

export default class QuickSort implements Sort {

  /**
   * O(n log n), worst case O(n^2)
   * @param inputs 
   */
  sort(inputs: number[]): number[] {
    this.qsort(inputs, 0, inputs.length - 1);
    return inputs;
  }

  /**
   * 
   * @param inputs 
   * @param lo index
   * @param hi index
   */
  private qsort(inputs: number[], lo: number, hi: number) {
    if (hi <= lo) return;
    let p: number = this.partition(inputs, lo, hi);
    this.qsort(inputs, lo, p-1);
    this.qsort(inputs, p+1, hi);
  }

  private partition(inputs: number[], lo: number, hi: number): number {
    // Partition into a[lo..j-1], a[j], a[j+1..hi] and return j.
    let pivot: number = inputs[lo];
    let i: number = lo;
    let j: number = hi + 1;
    while (true) { // Scan right, scan left, check for scan complete, and exchange.
      while (inputs[++i] < pivot) if (i == hi) break;
      while (pivot < inputs[--j]) if (j == lo) break;
      if (i >= j) break;
      this.swap(inputs, i, j);
    }
    this.swap(inputs, lo, j); // Put partitioning item v into a[j].
    return j; // with a[lo..j-1] <= a[j] <= a[j+1..hi].
  }

  private swap(inputs: number[], i: number, j: number) {
    let temp: number = inputs[i];
    inputs[i] = inputs[j];
    inputs[j] = temp;
  }
}


