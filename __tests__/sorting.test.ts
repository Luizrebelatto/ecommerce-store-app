import { sortingBooks } from "../src/utils/sorting";

describe('Sorting Function', () => {
  const bookMock = [
    {
      id: 1,
      title: "Harry Potter",
      price: 39.90
    },
    {
      id: 2,
      title: "Dom Casmurro",
      price: 29.90
    },
    {
      id: 3,
      title: "The Lord of the Rings: The Fellowship of the Ring",
      price: 59.90
    },
  ];

  it('should sort books A-Z by title', () => {
    const sortedBooks = sortingBooks('A-Z', bookMock);
    expect(sortedBooks[0].title).toBe('Dom Casmurro');
    expect(sortedBooks[1].title).toBe('Harry Potter');
    expect(sortedBooks[2].title).toBe('The Lord of the Rings: The Fellowship of the Ring');
  });

  it('should sort books Z-A by title', () => {
    const sortedBooks = sortingBooks('Z-A', bookMock);
    expect(sortedBooks[0].title).toBe('The Lord of the Rings: The Fellowship of the Ring');
    expect(sortedBooks[1].title).toBe('Harry Potter');
    expect(sortedBooks[2].title).toBe('Dom Casmurro');
  });

  it('should sort books by price from lowest to highest', () => {
    const sortedBooks = sortingBooks('moreCheaper', bookMock);
    expect(sortedBooks[0].price).toBe(29.90);
    expect(sortedBooks[1].price).toBe(39.90);
    expect(sortedBooks[2].price).toBe(59.90);
  });

  it('should sort books by price from highest to lowest', () => {
    const sortedBooks = sortingBooks('moreExpensive', bookMock);
    expect(sortedBooks[0].price).toBe(59.90);
    expect(sortedBooks[1].price).toBe(39.90);
    expect(sortedBooks[2].price).toBe(29.90);
  });
});
