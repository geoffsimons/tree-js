'use strict';

const Queue = require('./queue.js');

function Tree(val, children) {
  this.val = val;
  //TODO: Validate children is an array of Tree
  this.children = children || [];
}

Tree.prototype.print = function() {
  let output = '';
  let q = new Queue();
  q.enqueue(this);
  while(q.size() > 0) {
    let node = q.dequeue();
    node.children.forEach( child => {
      q.enqueue(child);
    });
    output += node.val + ' ';
  }
  return output;
};

Tree.prototype.add = function(tree) {
  if( !(tree instanceof Tree) ) {
    throw new Error('can only add instances of Tree');
  }
  this.children.push(tree);
};

module.exports = Tree;
