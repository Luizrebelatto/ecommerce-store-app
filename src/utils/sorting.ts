export function sortingBooks(rule, books) {
    let sortedBooks = [...books];
  
    switch (rule) {
      case 'A-Z':
        sortedBooks = sortedBooks.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'Z-A':
        sortedBooks = sortedBooks.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case 'moreCheaper':
        sortedBooks = sortedBooks.sort((a, b) => a.price - b.price);
        break;
      case 'moreExpensive':
        sortedBooks = sortedBooks.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }
  
    return sortedBooks;
  }