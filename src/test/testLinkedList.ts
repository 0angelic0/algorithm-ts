import { expect } from 'chai';
import LinkedList from '../ll/LinkedList';

describe('test linked list', function() {
  it('work', function() {
    let ll: LinkedList<number> = new LinkedList<number>();

    expect(ll.isEmpty()).to.be.true;
    expect(ll.peekHeadItem()).to.be.undefined;

    ll.addToHead(2);
    expect(ll.peekHeadItem()).to.be.equal(2);
    ll.addToHead(1);
    expect(ll.peekHeadItem()).to.be.equal(1);
    expect(ll.peekTailItem()).to.be.equal(2);

    expect(ll.isEmpty()).to.be.false;
    expect(ll.size()).to.be.equal(2);

    ll.addToTail(3);
    expect(ll.peekTailItem()).to.be.equal(3);
    ll.addToTail(4);
    expect(ll.peekTailItem()).to.be.equal(4);

    expect(ll.removeFromHead()).to.be.equal(1);
    expect(ll.removeFromTail()).to.be.equal(4);
    expect(ll.size()).to.be.equal(2);

    expect(ll.removeFromHead()).to.be.equal(2);
    expect(ll.removeFromHead()).to.be.equal(3);
    expect(ll.removeFromHead()).to.be.undefined;
    expect(ll.isEmpty()).to.be.true;

    expect(ll.peekTailItem()).to.be.undefined;
  });
});