const funnyPad = require('./index');

describe('funnyPad', () => {
  describe('basic functionality', () => {
    test('should pad string to specified length with funny words', () => {
      const result = funnyPad('hello', 20);
      expect(result.length).toBe(20);
      expect(result.startsWith('hello')).toBe(true);
    });

    test('should return original string if already at target length', () => {
      const input = 'hello';
      const result = funnyPad(input, 5);
      expect(result).toBe(input);
    });

    test('should return original string if longer than target length', () => {
      const input = 'hello world';
      const result = funnyPad(input, 5);
      expect(result).toBe(input);
    });

    test('should use default funny word if none specified', () => {
      const result = funnyPad('hi', 10);
      expect(result.length).toBe(10);
      expect(result.startsWith('hi')).toBe(true);
    });
  });

  describe('custom funny words', () => {
    test('should accept custom funny word', () => {
      const result = funnyPad('hi', 10, { funnyWord: 'banana' });
      expect(result).toContain('banana');
      expect(result.startsWith('hi')).toBe(true);
    });

    test('should repeat funny word as needed', () => {
      const result = funnyPad('x', 20, { funnyWord: 'lol' });
      expect(result.length).toBe(20);
      expect(result.startsWith('x')).toBe(true);
    });
  });

  describe('padding direction', () => {
    test('should pad on the right by default', () => {
      const result = funnyPad('hi', 10, { funnyWord: 'ha' });
      expect(result.startsWith('hi')).toBe(true);
      expect(result.endsWith('ha')).toBe(true);
    });

    test('should pad on the left when specified', () => {
      const result = funnyPad('hi', 10, { funnyWord: 'ha', padLeft: true });
      expect(result.endsWith('hi')).toBe(true);
      expect(result.startsWith('ha')).toBe(true);
    });
  });

  describe('input validation', () => {
    test('should throw error for non-string input', () => {
      expect(() => funnyPad(123, 10)).toThrow('Input must be a string');
      expect(() => funnyPad(null, 10)).toThrow('Input must be a string');
      expect(() => funnyPad(undefined, 10)).toThrow('Input must be a string');
    });

    test('should throw error for non-number length', () => {
      expect(() => funnyPad('hi', '10')).toThrow('Length must be a number');
      expect(() => funnyPad('hi', null)).toThrow('Length must be a number');
    });

    test('should throw error for negative length', () => {
      expect(() => funnyPad('hi', -5)).toThrow('Length must be a positive number');
    });

    test('should throw error for non-string funny word', () => {
      expect(() => funnyPad('hi', 10, { funnyWord: 123 })).toThrow('Funny word must be a string');
    });

    test('should throw error for empty funny word', () => {
      expect(() => funnyPad('hi', 10, { funnyWord: '' })).toThrow('Funny word cannot be empty');
    });

    test('should throw error for excessively long target length', () => {
      expect(() => funnyPad('hi', 1000000)).toThrow('Length exceeds maximum allowed (10000)');
    });
  });

  describe('edge cases', () => {
    test('should handle empty string', () => {
      const result = funnyPad('', 10, { funnyWord: 'noodle' });
      expect(result.length).toBe(10);
    });

    test('should handle single character padding', () => {
      const result = funnyPad('a', 5, { funnyWord: 'b' });
      expect(result).toBe('abbbb');
    });

    test('should handle unicode characters', () => {
      const result = funnyPad('😀', 5, { funnyWord: '🎉' });
      expect(result.startsWith('😀')).toBe(true);
    });
  });
});
