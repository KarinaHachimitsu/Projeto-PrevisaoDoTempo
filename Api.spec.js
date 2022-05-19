import { requestAPI } from './src/handleAPI.js';

describe('requestAPI é uma função,', () => {
    it('should be a function', () => {
      expect(typeof requestAPI).toBe('function');
    });
  });