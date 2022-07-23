import { BookRepository } from './BookRepository';

describe('BookRepository', () => {
  let bookRepository: BookRepository;
  beforeEach(() => {
    bookRepository = new BookRepository();
  });

  // in real, we will be running an in-memory DB to test repo functions
  it('should fetch from data source', async () => {
    const response = await bookRepository.getBooks();
    expect(response.length).toBe(10);
  });

  // in real, we will be running an in-memory DB to test repo functions
  it('should fetch from data source using id', async () => {
    const response = await bookRepository.getBookByID('dc9f0e08-117f-42cd-bbca-ffc8c4e1125e');
    expect(response.id).toBe('dc9f0e08-117f-42cd-bbca-ffc8c4e1125e');
  });
});
