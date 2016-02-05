import { expect } from 'chai';
import hello from '../src/index';

describe('#hello', () => {
  it('should say hello', () => {
    expect(hello('test')).to.equal('Hello test');
  });
});
