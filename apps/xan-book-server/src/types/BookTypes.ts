import { Request, Response, NextFunction } from 'express';

export interface BookPayload {
  id: string;
  title: string;
  publishingYear: number;
  description: string;
  shortDescription: string;
  author: string; // in real world systems, this will point to Author entity.
  publicationAddress: string;
  ISBN: number;
  subject: string[];
  price: string;
}

export interface IBookRepo {
  getBooks: () => Promise<BookPayload[]>;
  getBookByID: (id: string) => Promise<BookPayload>;
}

export interface IBookService {
  getBooks: () => Promise<BookPayload[]>;
  getBookByID: (id: string) => Promise<BookPayload>;
}

export interface IBookController {
  getBooks: (req: Request, res: Response, next: NextFunction) => void;
  getBookByID: (req: Request, res: Response, next: NextFunction) => void;
}
