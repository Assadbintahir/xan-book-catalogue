export interface BookPayload {
  id: string;
  title: string;
  publishingYear: number;
  description: string;
  shortDescription: string;
  author: string;
  publicationAddress: string;
  ISBN: number;
  subject: string[];
  price: string;
}

export interface IBookState {
  books: BookPayload[];
  isLoading: boolean;
}
