import { Router } from 'express';
import { BookService } from 'apps/xan-book-server/src/services';
import { BookRepository } from 'apps/xan-book-server/src/repositories';
import { BookController } from './BookController';

/**
 * sets up Book controller & API Routes
 * @param router express.Router
 */
export const BookRoutes = (router: Router) => {
  const bookRepository = new BookRepository();
  const bookService = new BookService(bookRepository);
  const controller = new BookController(bookService);

  router.get('/api/v1/books', controller.getBooks.bind(controller));
  router.get('/api/v1/book/:bookID', controller.getBookByID.bind(controller));
};
