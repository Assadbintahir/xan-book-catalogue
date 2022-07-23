import { BookPayload, IBookRepo } from '../../types';
import { books } from './BookData';

export class BookRepository implements IBookRepo {
  // inject repo dependencies here
  constructor() {}

  /**
   * fetches books and return it
   * @returns BookPayload
   */
  async getBooks(): Promise<BookPayload[]> {
    // in real world scenario, it will fetch from DB
    return books;
  }

  /**
   * fetches book by id and returns it
   * @param id string
   * @returns BookPayload
   */
  async getBookByID(id: string): Promise<BookPayload> {
    // in real world scenario, it will fetch from DB
    return books.find((book) => book.id === id);
  }
}
