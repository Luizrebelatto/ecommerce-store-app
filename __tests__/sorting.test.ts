import { sortingBooks } from "../src/utils/sorting";

describe('Sorting Function', () => {
  const booksData = [
    { id: 1, title: 'Z Book', price: 10 },
    { id: 2, title: 'A Book', price: 5 },
    { id: 3, title: 'M Book', price: 15 },
  ];

  it('should sort books A-Z', () => {
    const sortedBooks = sortingBooks('A-Z', booksData);
    expect(sortedBooks[0].title).toBe('A Book');
    expect(sortedBooks[1].title).toBe('M Book');
    expect(sortedBooks[2].title).toBe('Z Book');
  });

  it('should sort books Z-A', () => {
    const sortedBooks = sortingBooks('Z-A', booksData);
    expect(sortedBooks[0].title).toBe('Z Book');
    expect(sortedBooks[1].title).toBe('M Book');
    expect(sortedBooks[2].title).toBe('A Book');
  });

  it('should sort books by price from lowest to highest', () => {
    const sortedBooks = sortingBooks('moreCheaper', booksData);
    expect(sortedBooks[0].price).toBe(5);
    expect(sortedBooks[1].price).toBe(10);
    expect(sortedBooks[2].price).toBe(15);
  });

  it('should sort books by price from highest to lowest', () => {
    const sortedBooks = sortingBooks('moreExpensive', booksData);
    expect(sortedBooks[0].price).toBe(15);
    expect(sortedBooks[1].price).toBe(10);
    expect(sortedBooks[2].price).toBe(5);
  });
});
