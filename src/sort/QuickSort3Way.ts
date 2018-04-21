import Sort from './Sort';

export default class QuickSort3Way implements Sort {

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
    let pivot: number = inputs[lo];
    let lt: number = lo;
    let i: number = lo + 1;
    let gt: number = hi;
    while (i <= gt) {
      if (inputs[i] < pivot) {
        this.swap(inputs, lt, i);
        lt++;
        i++;
      } else if (inputs[i] > pivot) {
        this.swap(inputs, gt, i);
        gt--;
      } else { // == pivot
        i++;
      }
    } // Now a[lo..lt-1] < v = a[lt..gt] < a[gt+1..hi].
    this.qsort(inputs, lo, lt-1);
    this.qsort(inputs, gt+1, hi);
  }

  private swap(inputs: number[], i: number, j: number) {
    let temp: number = inputs[i];
    inputs[i] = inputs[j];
    inputs[j] = temp;
  }
}


