'use strict';

const debug = require('debug')('algs:queue-test');
const expect = require('chai').expect;
const Queue = require('../queue.js');

describe('Queue', function() {
  it('should do what we want', function() {
    var queue = new Queue();

    debug('adding A,B,C');
    queue.enqueue('A');
    queue.enqueue('B');
    queue.enqueue('C');
    debug('queue:',JSON.stringify(queue,null,2));
    debug('queue.size():',queue.size());
    expect(queue.size()).to.equal(3);

    debug('dequeue()');
    var item = queue.dequeue();
    debug('queue:',JSON.stringify(queue,null,2));
    debug('item:',item);
    expect(item).to.equal('A'); //FIFO
    expect(queue.size()).to.equal(2);
    debug('adding D');
    queue.enqueue('D');
    expect(queue.size()).to.equal(3);

    debug('dequeue()');
    debug('queue:',JSON.stringify(queue,null,2));
    item = queue.dequeue();
    debug('item:',item);
    expect(item).to.equal('B');
    expect(queue.size()).to.equal(2);

    debug('dequeue()');
    debug('queue:',JSON.stringify(queue,null,2));
    item = queue.dequeue();
    debug('item:',item);
    expect(item).to.equal('C');
    expect(queue.size()).to.equal(1);

    debug('dequeue()');
    debug('queue:',JSON.stringify(queue,null,2));
    item = queue.dequeue();
    debug('item:',item);
    expect(item).to.equal('D');
    expect(queue.size()).to.equal(0);

    debug('dequeue()');
    debug('queue:',JSON.stringify(queue,null,2));
    item = queue.dequeue();
    debug('item:',item);
    expect(item).to.be.null;
    expect(queue.size()).to.equal(0);

  });
});
