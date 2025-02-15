import { describe, it, expect } from 'vitest';
import { greet } from './greet';

describe('greet', () => {
  it('should return default greeting when only name is provided', () => {
    expect(greet('John')).toBe('Hello, John!');
  });

  it('should return custom greeting when both name and greeting are provided', () => {
    expect(greet('John', 'Hi')).toBe('Hi, John!');
  });

  it('should use default greeting when empty string greeting is provided', () => {
    expect(greet('John', '')).toBe('Hello, John!');
  });

  it('should work with special characters in name', () => {
    expect(greet('John@123')).toBe('Hello, John@123!');
  });

  it('should work with special characters in greeting', () => {
    expect(greet('John', 'Hey!!!')).toBe('Hey!!!, John!');
  });

  it('should work with unicode characters in name', () => {
    expect(greet('José')).toBe('Hello, José!');
  });

  it('should work with unicode characters in greeting', () => {
    expect(greet('John', '¡Hola')).toBe('¡Hola, John!');
  });

  it('should handle whitespace in name', () => {
    expect(greet('John Doe')).toBe('Hello, John Doe!');
  });

  it('should handle whitespace in greeting', () => {
    expect(greet('John', 'Good morning')).toBe('Good morning, John!');
  });
});
