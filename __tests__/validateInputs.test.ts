import { validatePrice, validateDescription, validateTitle } from '../src/utils/validateInputs';

describe('validatePrice function', () => {
  it('should return true integer numbers and return false if isnt integer', () => {
    expect(validatePrice('123')).toBe(true);
    expect(validatePrice('0')).toBe(true);
    expect(validatePrice('99999')).toBe(true);
  });

  it('should return true for numbers with one decimal place', () => {
    expect(validatePrice('123.4')).toBe(true);
    expect(validatePrice('0.5')).toBe(true);
  });

  it('should return true for numbers with two decimal place', () => {
    expect(validatePrice('123.45')).toBe(true);
    expect(validatePrice('0.05')).toBe(true);
    expect(validatePrice('9999.99')).toBe(true);
  });

  it('should return false for numbers with more than two decimal places', () => {
    expect(validatePrice('123.456')).toBe(false);
    expect(validatePrice('0.123')).toBe(false);
  });

  it('should return false for non-numeric values', () => {
    expect(validatePrice('abc')).toBe(false);
    expect(validatePrice('12a')).toBe(false);
    expect(validatePrice('12.a')).toBe(false);
    expect(validatePrice('a.12')).toBe(false);
  });
});

describe('validateDescription function', () => {
  it('should return false for descriptions longer than 20 characters', () => {
    expect(validateDescription('this a good book, recomend for you, its about a young developer who decides learn ruby')).toBe(false);
  });

  it('should return true for descriptions of 20 characters or less', () => {
    expect(validateDescription('short description')).toBe(true);
    expect(validateDescription('')).toBe(true);
  });
});

describe('validateTitle function', () => {
  it('should return true for titles without special characters', () => {
    expect(validateTitle('Harry Potter')).toBe(true);
    expect(validateTitle('Javascript for dummies')).toBe(true);
  });

  it('should return false for titles with special characters', () => {
    expect(validateTitle('Principles of Software Architecture Modernization @')).toBe(false);
    expect(validateTitle('code$scala')).toBe(false);
  });
});