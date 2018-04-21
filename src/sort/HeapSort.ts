import Sort from './Sort';

export default class HeapSort implements Sort {

  /**
   * O(n log n)
   * @param inputs 
   */
  sort(inputs: number[]): number[] {
    inputs.unshift(undefined);

    let n: number = inputs.length - 1;
    for (let k: number = Math.floor(n/2); k >= 1; k--) {
      this.sink(inputs, k, n);
    }
    while (n > 1) {
      this.swap(inputs, 1, n);
      n--;
      this.sink(inputs, 1, n);
    }

    inputs.shift();
    return inputs;
  }

  sink(inputs: number[], k: number, n: number) {
    let leftChildK: number;
    let rightChildK: number;
    let isLeftLargerThanK: boolean;
    let isRightLargerThanK: boolean;
    while (k*2 <= n) {
      leftChildK = k*2;
      rightChildK = k*2 + 1;
      isLeftLargerThanK = inputs[leftChildK] > inputs[k];
      isRightLargerThanK = rightChildK > n ? false : inputs[rightChildK] > inputs[k];
      if (isLeftLargerThanK && !isRightLargerThanK) { // Only left larger than k
        this.swap(inputs, leftChildK, k);
        k = leftChildK;
      } else if (isRightLargerThanK && !isLeftLargerThanK) { // Only right larger than k
        this.swap(inputs, rightChildK, k);
        k = rightChildK;
      } else if (isLeftLargerThanK && isRightLargerThanK) { // Both left and right larger than k
        if (inputs[leftChildK] > inputs[rightChildK]) { // Left is the largest
          this.swap(inputs, leftChildK, k);
          k = leftChildK;
        } else { // Right is the largest or left equal right
          this.swap(inputs, rightChildK, k);
          k = rightChildK;
        }
      } else { // K is already largest
        break;
      }
    }
  }

  swap(inputs: number[], i: number, j: number) {
    let temp: number = inputs[i];
    inputs[i] = inputs[j];
    inputs[j] = temp;
  }
}