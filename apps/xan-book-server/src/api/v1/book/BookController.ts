import { Request, Response, NextFunction } from 'express';
import { IBookController, IBookService } from 'apps/xan-book-server/src/types';

export class BookController implements IBookController {
  private bookService: IBookService;
  // inject controller dependencies here
  constructor(bookService: IBookService) {
    this.bookService = bookService;
  }

  /**
   * GET books handler
   * @param req Request
   * @param res Response
   * @param next NextFunction
   */
  async getBooks(req: Request, res: Response, next: NextFunction) {
    try {
      const books = await this.bookService.getBooks();
      res.status(200).json(books);
    } catch (error) {
      next(error);
    }
  }

  /**
   * GET book by id handler
   * @param req Request
   * @param res Response
   * @param next NextFunction
   */
  async getBookByID(req: Request, res: Response, next: NextFunction) {
    try {
      const book = await this.bookService.getBookByID(req.params.bookID);
      res.status(200).json(book);
    } catch (error) {
      next(error);
    }
  }
}
