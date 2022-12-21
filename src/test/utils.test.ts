import assert from 'assert';
import { getStatesString } from '../utils';

describe('utils test', () => {
  it('get state string from array', () => {
    const arr = [{ name: 'one two' }, { name: 'tree' }, { name: 'four' }];
    const resultString = getStatesString(arr);
    const expectedResult = 'two one, tree, four';
    assert.strictEqual(resultString, expectedResult);
  });
});
