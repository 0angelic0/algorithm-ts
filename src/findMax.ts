/**
 * O(n)
 * @param input 
 */
export function findMax(input: number[]) {
  if (input.length == 0) return null;

  let max: number = input[0];
  for (let i:number = 1; i < input.length; i++) {
    if (input[i] > max) max = input[i];
  }
  return max;
}

/**
 * O(n)
 * @param input 
 */
export function findMax2(input: number[]) {
  if (input.length <= 1) return null;

  let max: number = input[0];
  let max2: number = 0;
  for (let i:number = 1; i < input.length; i++) {
    if (input[i] > max) {
      max2 = max;
      max = input[i];
    }
  }
  return max2;
}