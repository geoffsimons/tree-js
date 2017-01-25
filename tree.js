'use strict';

const Queue = require('./queue.js');

function Tree(val, children) {
  this.val = val;
  //TODO: Validate children is an array of Tree
  this.children = children || [];
}

Tree.prototype.print = function() {
  let output = '';
  let curLevel = 0;
  let q = new Queue();
  q.enqueue({ node: this, level: 0 });
  while(q.size() > 0) {
    let item = q.dequeue();
    let node = item.node;
    node.children.forEach( child => {
      q.enqueue({ node: child, level: item.level + 1 });
    });
    if(item.level > curLevel) {
      curLevel = item.level;
      output += '\n';
    }
    output += node.val;
  }
  return output;
};

module.exports = Tree;
