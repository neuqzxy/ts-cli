import assert from 'assert'
import abc from '../src/index'

describe('validate:', () => {
  /**
   * myFirstFunc
   */
  describe('myFirstFunc', () => {
    test(' return hello rollup ', () => {
      assert.strictEqual(abc(2), 6);
    })
  })
});
