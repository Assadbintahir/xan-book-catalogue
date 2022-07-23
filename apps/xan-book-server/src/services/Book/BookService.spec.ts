import { MockBookRepository } from '../../mocks';
import { mockBook } from '../../mocks/repositories/fixtures';
import { BookService } from './BookService';

describe('BookService', () => {
  let bookService: BookService;
  beforeEach(() => {
    bookService = new BookService(new MockBookRepository(false));
  });

  it('should return fetched books', async () => {
    const response = await bookService.getBooks();
    expect(response).toStrictEqual([mockBook]);
  });

  it('should return fetched book by id', async () => {
    const response = await bookService.getBookByID('random-id');
    expect(response).toStrictEqual(mockBook);
  });
});
