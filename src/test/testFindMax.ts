import { expect } from 'chai';
import { findMax, findMax2 } from '../algo/findMax';

describe('test', function() {
  it('findMax', function() {
    expect(findMax([1, 3, 5])).to.be.equal(5);
    expect(findMax([1, 3])).to.be.equal(3);
    expect(findMax([1])).to.be.equal(1);
    expect(findMax([])).to.be.null;
  })

  it('findMax2', function() {
    expect(findMax2([1, 3, 5])).to.be.equal(3);
    expect(findMax2([1, 3])).to.be.equal(1);
    expect(findMax2([1])).to.be.null;
    expect(findMax2([])).to.be.null;
  })
});