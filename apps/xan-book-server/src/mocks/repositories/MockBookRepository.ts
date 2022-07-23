import { BookPayload, IBookRepo } from '../../types';
import { mockBook } from './fixtures';

export class MockBookRepository implements IBookRepo {
  private throwError = true;
  constructor(throwError: boolean = true) {
    this.throwError = throwError;
  }

  async getBooks(): Promise<BookPayload[]> {
    if (this.throwError) {
      throw new Error('test error from repository');
    } else {
      return [mockBook];
    }
  }

  async getBookByID(id: string): Promise<BookPayload> {
    if (this.throwError) {
      throw new Error('test error from repository');
    } else {
      return mockBook;
    }
  }
}
