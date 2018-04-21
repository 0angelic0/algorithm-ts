import Sort from './Sort';

export default class SelectionSort implements Sort {

  /**
   * O(n^2)
   * @param inputs 
   */
  sort(inputs: number[]): number[] {
    const n: number = inputs.length;
    for (let i: number = 0; i < n; i++) {
      let minIndex: number = i;
      for (let j: number = i + 1; j < n; j++) {
        if (inputs[j] < inputs[minIndex]) minIndex = j;
      }

      // Swap
      let temp: number = inputs[i];
      inputs[i] = inputs[minIndex];
      inputs[minIndex] = temp;
    }
    return inputs;
  }
}


