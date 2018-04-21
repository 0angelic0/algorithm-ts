import Sort from './Sort';

export default class InsertionSort implements Sort {

  /**
   * O(n^2)
   * @param inputs 
   */
  sort(inputs: number[]): number[] {
    const n: number = inputs.length;
    for (let i: number = 0; i < n; i++) {
      for (let j: number = i; j > 0 && inputs[j] < inputs[j - 1]; j--) {
        // Swap one step back
        let temp: number = inputs[j - 1];
        inputs[j - 1] = inputs[j];
        inputs[j] = temp;
      }
    }
    return inputs;
  }
}


