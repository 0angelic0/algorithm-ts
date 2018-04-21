import Sort from './Sort';

export default class ShellSort implements Sort {

  /**
   * O(n^2)
   * @param inputs 
   */
  sort(inputs: number[]): number[] {
    const n: number = inputs.length;
    let h: number = 1;
    while (h < n/3) h = Math.floor(3*h + 1);
    while (h >= 1) {
      for (let i: number = h; i < n; i++) {
        for (let j: number = i; j >= h && inputs[j] < inputs[j-h]; j -= h) {
          // Swap h step back at a time
          let temp: number = inputs[j-h];
          inputs[j-h] = inputs[j];
          inputs[j] = temp;
        }
      }
      h = Math.floor(h/3);
    }

    return inputs;
  }
}


