import { useEffect } from 'react';

import styles from './bookcatalogue.module.css';
import { Card, CardsSkeleton } from '../../components';
import { getBooksAPI } from '../../features/books/bookSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

export function BookCatalogue() {
  const { books, isLoading } = useAppSelector((state) => state.books);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getBooksAPI());
  }, [dispatch]);

  return (
    <div>{isLoading ? <CardsSkeleton cardCount={5} /> : books.map((book) => <Card {...book} key={book.id} />)}</div>
  );
}
