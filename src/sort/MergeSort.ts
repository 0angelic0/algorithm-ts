import Sort from './Sort';

export default class MergeSort implements Sort {

  merge(left: number[], right: number[]) {
    const outputs: number[] = [];

    const ln: number = left.length;
    const rn: number = right.length;

    let i: number = 0;
    let j: number = 0;
    while (i < ln || j < rn) {
      if (i == ln && j < rn) { outputs.push(right[j++]); continue; }
      if (i < ln && j == rn) { outputs.push(left[i++]); continue; }

      if (left[i] <= right[j]) {
        outputs.push(left[i]);
        i++;
      } else {
        outputs.push(right[j]);
        j++;
      }
    }
    return outputs;
  }

  /**
   * O(n log n)
   * @param inputs 
   */
  sort(inputs: number[]): number[] {
    const n: number = inputs.length;
    if (n == 0) return [];
    if (n == 1) return inputs;
    if (n == 2) {
      if (inputs[1] < inputs[0]) {
        let temp: number = inputs[0];
        inputs[0] = inputs[1];
        inputs[1] = temp;
      }
      return inputs;
    }

    const half: number = Math.floor(n/2);
    const left: number[] = this.sort(inputs.slice(0, half));
    const right: number[] = this.sort(inputs.slice(half));
    return this.merge(left, right);
  }
}


