import { BookPayload, IBookRepo, IBookService } from '../../types';

export class BookService implements IBookService {
  private bookRepository: IBookRepo;
  // inject service dependencies here
  constructor(bookRepository: IBookRepo) {
    this.bookRepository = bookRepository;
  }

  /**
   * fetches books and return it
   * @returns BookPayload
   */
  async getBooks(): Promise<BookPayload[]> {
    return this.bookRepository.getBooks();
  }

  /**
   * fetches book by ID and returns it
   * @returns BookPayload
   */
  async getBookByID(id: string): Promise<BookPayload> {
    return this.bookRepository.getBookByID(id);
  }
}
