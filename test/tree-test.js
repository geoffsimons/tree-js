'use strict';

const debug = require('debug')('algs:tree-test.js');
const expect = require('chai').expect;
const Tree = require('../tree.js');

describe('Tree', function() {
  describe('#print', function() {
    before( () => {
      this.tree = new Tree('A', [
        new Tree('B', [new Tree('D')]),
        new Tree('C')
      ]);
      debug(this.tree);
    });

    it('should print in level order', () => {
      let result = this.tree.print();
      debug(result);
      expect(result).to.equal('A\nBC\nD');
    });
  });
});
