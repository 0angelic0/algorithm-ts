import { expect } from 'chai';
import Queue from '../queue/Queue';
import QueueByArray from '../queue/QueueByArray';
import QueueByLL from '../queue/QueueByLL';
import PriorityQueue from '../queue/PriorityQueue';

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

  it('test priority queue', function() {
    const pq: PriorityQueue = new PriorityQueue(100);
    expect(pq.isEmpty()).to.be.true;
    expect(pq.size()).to.be.equal(0);

    pq.insert(5);
    pq.insert(10);
    pq.insert(3);
    pq.insert(7);
    pq.insert(25);
    pq.insert(16);
    expect(pq.popMax()).to.be.equal(25);
    expect(pq.popMax()).to.be.equal(16);
    expect(pq.popMax()).to.be.equal(10);
    pq.insert(2);
    expect(pq.popMax()).to.be.equal(7);
    pq.insert(6);
    pq.insert(5);
    expect(pq.popMax()).to.be.equal(6);
    expect(pq.popMax()).to.be.equal(5);
    expect(pq.popMax()).to.be.equal(5);
    expect(pq.popMax()).to.be.equal(3);
    expect(pq.popMax()).to.be.equal(2);

    expect(pq.isEmpty()).to.be.true;
  });
});