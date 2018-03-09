import { expect } from 'chai';

describe('test array', function() {

  it('push', function() {
    const a: number[] = [3, 5, 7];
    expect(a.push(9)).to.be.equal(4);
    expect(a).to.be.eql([3, 5, 7, 9]);
    expect(a.length).to.be.equal(4);
  });

  it('pop', function() {
    const a: number[] = [3, 5, 7];
    expect(a.pop()).to.be.equal(7);
    expect(a).to.be.eql([3, 5]);
    expect(a.length).to.be.equal(2);
  });

  it('unshift', function() {
    const a: number[] = [3, 5, 7];
    expect(a.unshift(1)).to.be.equal(4);
    expect(a).to.be.eql([1, 3, 5, 7]);
    expect(a.length).to.be.equal(4);
  });

  it('shift', function() {
    const a: number[] = [1, 3, 5, 7];

    expect(a.shift()).to.be.equal(1);
    expect(a.length).to.be.equal(3);

    expect(a.shift()).to.be.equal(3);
    expect(a.length).to.be.equal(2);

    expect(a).to.be.eql([5, 7]);
  });

  it('slice', function() {
    const a: number[] = [1, 3, 5, 7, 9, 10];

    expect(a.slice(1)).to.be.eql([3, 5, 7, 9, 10]);
    expect(a.slice(3)).to.be.eql([7, 9, 10]);
    expect(a.slice(5)).to.be.eql([10]);
    expect(a.slice(-1)).to.be.eql([10]);
    expect(a.slice(-2)).to.be.eql([9, 10]);

    expect(a.slice(1, 2)).to.be.eql([3]);
    expect(a.slice(1, 3)).to.be.eql([3, 5]);
    expect(a.slice(1, 1)).to.be.eql([]);
    expect(a.slice(3, 1)).to.be.eql([]);

    expect(a.slice(3, 5)).to.be.eql([7, 9]);
    expect(a.slice(4, 6)).to.be.eql([9, 10]);
    expect(a.slice(4, 10)).to.be.eql([9, 10]);

    expect(a.slice(1, -1)).to.be.eql([3, 5, 7, 9]);
    expect(a.slice(1, -3)).to.be.eql([3, 5]);
  });

  it('splice', function() {
    const a: number[] = [1, 3, 5, 7, 9, 10];

    expect(a.length).to.be.equal(6);

    expect(a.splice(0, 1)).to.be.eql([1]);
    expect(a).to.be.eql([3, 5, 7, 9, 10]);
    expect(a.length).to.be.equal(5);

    expect(a.splice(0, 3)).to.be.eql([3, 5, 7]);
    expect(a).to.be.eql([9, 10]);
    expect(a.length).to.be.equal(2);

    expect(a.splice(0, 0, ...[1, 3, 5, 7])).to.be.eql([]);
    expect(a).to.be.eql([1, 3, 5, 7, 9, 10]);
    expect(a.length).to.be.equal(6);

    expect(a.splice(2, 3, ...[3.1, 3.2, 3.3, 3.4])).to.be.eql([5, 7, 9]);
    expect(a).to.be.eql([1, 3, 3.1, 3.2, 3.3, 3.4, 10]);
    expect(a.length).to.be.equal(7);
  });

  it('reverse', function() {
    const a: number[] = [1, 3, 5, 7, 9, 10];

    expect(a.reverse()).to.be.eql([10, 9, 7, 5, 3, 1]);
    expect(a).to.be.eql([10, 9, 7, 5, 3, 1]);
  });
});