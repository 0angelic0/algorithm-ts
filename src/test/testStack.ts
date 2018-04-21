import { expect } from 'chai';
import Stack from '../stack/Stack';
import StackByArray from '../stack/StackByArray';
import StackByLL from '../stack/StackByLL';

function testStack(stack: Stack<number>) {
  expect(stack.isEmpty()).to.be.true;
  expect(stack.peek()).to.be.equal(undefined);
  expect(stack.pop()).to.be.equal(undefined);

  stack.push(10);
  expect(stack.peek()).to.be.equal(10);
  expect(stack.size()).to.be.equal(1);

  expect(stack.isEmpty()).to.be.false;

  stack.push(20);
  expect(stack.peek()).to.be.equal(20);
  expect(stack.size()).to.be.equal(2);

  stack.push(30);
  expect(stack.peek()).to.be.equal(30);
  expect(stack.size()).to.be.equal(3);

  stack.push(40);
  expect(stack.peek()).to.be.equal(40);
  expect(stack.size()).to.be.equal(4);

  expect(stack.pop()).to.be.equal(40);
  expect(stack.size()).to.be.equal(3);

  expect(stack.pop()).to.be.equal(30);
  expect(stack.size()).to.be.equal(2);

  expect(stack.peek()).to.be.equal(20);
  
  expect(stack.pop()).to.be.equal(20);
  expect(stack.pop()).to.be.equal(10);

  expect(stack.peek()).to.be.equal(undefined);
  expect(stack.pop()).to.be.equal(undefined);
  expect(stack.isEmpty()).to.be.true;
}

describe('test stack', function() {
  it('stack by array', function() {
    const stack: StackByArray<number> = new StackByArray<number>();
    testStack(stack);
  });

  it('stack by linked list', function() {
    const stack: StackByLL<number> = new StackByLL<number>();
    testStack(stack);
  });
});