'use strict';

function Queue() {
  this.head = -1;
  this.tail = -1;
  this.items = {};
}

Queue.prototype.enqueue = function(item) {
  if(this.head == -1) this.head = 0;
  this.items[++this.tail] = item;
};

Queue.prototype.dequeue = function() {
  if(this.head > this.tail) return null;
  let item = this.items[this.head];
  delete this.items[this.head++];
  return item;
};

Queue.prototype.size = function() {
  if(this.head == -1) return 0;
  return this.tail - this.head + 1;
};

module.exports = Queue;
