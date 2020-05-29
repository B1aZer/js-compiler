import Observable from '../src/utils/observable.js';
import {tenmegabyte, allocatedMemory} from './_helper.js';

var assert = require('assert');

describe('Observable', function() {
  describe('on/fire', function() {
    it('should set listener and fire listener', function() {
      let obs = new Observable();
      let a = 1;
      let f = () => {
        a = 2;
      };
      obs.on('init', f);
      obs.fireEvent('init');
      assert.equal(a, 2);
    });
    it('should keep memory in use', function() {
      allocatedMemory(function() {
        let obs = new Observable();
        obs.on('test', tenmegabyte());
        obs.on('test', tenmegabyte());
        obs.on('test', tenmegabyte());
      }).then(heapUsed => {
        assert.equal(heapUsed, 30)
      });
    });
    it('should not keep memory', function() {
      //TODO: implement on weak maps
    });
  });
});



