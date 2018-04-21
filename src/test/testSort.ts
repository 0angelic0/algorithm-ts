import { expect } from 'chai';

import Sort from '../sort/Sort';
import SelectionSort from '../sort/SelectionSort';
import InsertionSort from '../sort/InsertionSort';
import ShellSort from '../sort/ShellSort';
import MergeSort from '../sort/MergeSort';
import QuickSort from '../sort/QuickSort';
import QuickSort3Way from '../sort/QuickSort3Way';
import HeapSort from '../sort/HeapSort';

describe('test Sort', function() {
  it('test Selection Sort', function() {
    const s: Sort = new SelectionSort();
    expect(s.sort([3, 1, 2])).to.be.eql([1, 2, 3]);
    expect(s.sort([3, 5, 2, 4, 1])).to.be.eql([1, 2, 3, 4, 5]);
    expect(s.sort([9, 8, 3, 4, 7, 6, 5, 1, 2])).to.be.eql([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(s.sort([9, 8, 3, 4, 7, 6, 5, 1, 2, 11, 27, 45, 38, 24, 10, 22, 33])).to.be.eql([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 22, 24, 27, 33, 38, 45]);
  });

  it('test Insertion Sort', function() {
    const s: Sort = new InsertionSort();
    expect(s.sort([3, 1, 2])).to.be.eql([1, 2, 3]);
    expect(s.sort([3, 5, 2, 4, 1])).to.be.eql([1, 2, 3, 4, 5]);
    expect(s.sort([9, 8, 3, 4, 7, 6, 5, 1, 2])).to.be.eql([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(s.sort([9, 8, 3, 4, 7, 6, 5, 1, 2, 11, 27, 45, 38, 24, 10, 22, 33])).to.be.eql([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 22, 24, 27, 33, 38, 45]);
  });

  it('test Shell Sort', function() {
    const s: Sort = new ShellSort();
    expect(s.sort([3, 1, 2])).to.be.eql([1, 2, 3]);
    expect(s.sort([3, 5, 2, 4, 1])).to.be.eql([1, 2, 3, 4, 5]);
    expect(s.sort([9, 8, 3, 4, 7, 6, 5, 1, 2])).to.be.eql([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(s.sort([9, 8, 3, 4, 7, 6, 5, 1, 2, 11, 27, 45, 38, 24, 10, 22, 33])).to.be.eql([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 22, 24, 27, 33, 38, 45]);
  });

  it('test Merge Sort', function() {
    const s: Sort = new MergeSort();
    expect(s.sort([3, 1, 2])).to.be.eql([1, 2, 3]);
    expect(s.sort([3, 5, 2, 4, 1])).to.be.eql([1, 2, 3, 4, 5]);
    expect(s.sort([9, 8, 3, 4, 7, 6, 5, 1, 2])).to.be.eql([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(s.sort([9, 8, 3, 4, 7, 6, 5, 1, 2, 11, 27, 45, 38, 24, 10, 22, 33])).to.be.eql([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 22, 24, 27, 33, 38, 45]);
  });

  it('test Quick Sort', function() {
    const s: Sort = new QuickSort();
    expect(s.sort([3, 1, 2])).to.be.eql([1, 2, 3]);
    expect(s.sort([3, 5, 2, 4, 1])).to.be.eql([1, 2, 3, 4, 5]);
    expect(s.sort([9, 8, 3, 4, 7, 6, 5, 1, 2])).to.be.eql([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(s.sort([9, 8, 3, 4, 7, 6, 5, 1, 2, 11, 27, 45, 38, 24, 10, 22, 33])).to.be.eql([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 22, 24, 27, 33, 38, 45]);
  });

  it('test Quick Sort 3 Way', function() {
    const s: Sort = new QuickSort3Way();
    expect(s.sort([3, 1, 2])).to.be.eql([1, 2, 3]);
    expect(s.sort([3, 5, 2, 4, 1])).to.be.eql([1, 2, 3, 4, 5]);
    expect(s.sort([9, 8, 3, 4, 7, 6, 5, 1, 2])).to.be.eql([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(s.sort([9, 8, 3, 4, 7, 6, 5, 1, 2, 11, 27, 45, 38, 24, 10, 22, 33])).to.be.eql([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 22, 24, 27, 33, 38, 45]);
  });

  it('test Heap Sort', function() {
    const s: Sort = new HeapSort();
    expect(s.sort([3, 1, 2])).to.be.eql([1, 2, 3]);
    expect(s.sort([3, 5, 2, 4, 1])).to.be.eql([1, 2, 3, 4, 5]);
    expect(s.sort([9, 8, 3, 4, 7, 6, 5, 1, 2])).to.be.eql([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(s.sort([9, 8, 3, 4, 7, 6, 5, 1, 2, 11, 27, 45, 38, 24, 10, 22, 33])).to.be.eql([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 22, 24, 27, 33, 38, 45]);
  });
});