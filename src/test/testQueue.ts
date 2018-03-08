import { expect } from 'chai';
import Queue from '../Queue';
import QueueByArray from '../QueueByArray';
import QueueByLL from '../QueueByLL';

function testQueue(queue: Queue<number>) {
  expect(queue.isEmpty()).to.be.true;
  expect(queue.size()).to.be.equal(0);
  expect(queue.peek()).to.be.undefined;
  expect(queue.dequeue()).to.be.undefined;

  queue.enqueue(11);
  expect(queue.isEmpty()).to.be.false;
  expect(queue.size()).to.be.equal(1);
  expect(queue.peek()).to.be.equal(11);

  queue.enqueue(22);
  queue.enqueue(33);
  expect(queue.isEmpty()).to.be.false;
  expect(queue.size()).to.be.equal(3);
  expect(queue.peek()).to.be.equal(11);

  expect(queue.dequeue()).to.be.equal(11);
  expect(queue.size()).to.be.equal(2);
  expect(queue.peek()).to.be.equal(22);

  expect(queue.dequeue()).to.be.equal(22);
  expect(queue.dequeue()).to.be.equal(33);

  expect(queue.isEmpty()).to.be.true;
  expect(queue.size()).to.be.equal(0);
  expect(queue.peek()).to.be.undefined;
  expect(queue.dequeue()).to.be.undefined;
}

describe('queue', function() {
  it('test queue by array', function() {
    const queue: QueueByArray<number> = new QueueByArray<number>();
    testQueue(queue);
  });

  it('test queue by linked list', function() {
    const queue: QueueByLL<number> = new QueueByLL<number>();
    testQueue(queue);
  });
});