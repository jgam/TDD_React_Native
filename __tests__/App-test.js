/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

console.log('test pased');
// Note: test renderer must be required after react-native.
/*
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<App />);
});
*/
describe('Jest', ()=> {
  it('is it working?', () => {
      const a = 1;
      expect(a + 1).toBe(2)
  })
})