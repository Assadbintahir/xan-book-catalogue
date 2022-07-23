import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { json } from 'stream/consumers';

import { Pill, CardsSkeleton } from '../../components';
import { getBookByIdAPI } from '../../features/books/bookSlice';
import { BookPayload } from '../../features/books/types';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import styles from './bookdetails.module.css';

export function BookDetails() {
  const { id } = useParams();
  const { books, isLoading } = useAppSelector((state) => state.books);
  const dispatch = useAppDispatch();

  const book = books.find((book) => book.id === id) as BookPayload;

  useEffect(() => {
    if (!book) {
      dispatch(getBookByIdAPI(id as string));
    }
  }, [dispatch]);
  return (
    <>
      {!book || isLoading ? (
        <CardsSkeleton cardCount={1} />
      ) : (
        <div className={styles['flex-center']}>
          <div className={styles['flex-col-body']}>
            <div className={styles['flex-col-justify']}>
              <h5 className={styles['card-title']}>{book?.title}</h5>
              <hr className={styles['hr-line-break']} />
              <div className={styles['pill-flex']}>
                {book.subject.map((sub) => (
                  <Pill key={sub} value={sub} />
                ))}
              </div>
              <p className={styles['card-description']}>{book?.description}</p>
              <div className={styles['card-bottom-row']}>
                <p className={styles['card-author']}>{`ISBN: ${book.ISBN}`}</p>
                <p className={styles['card-author']}>
                  Published by <i>{book.publicationAddress}</i>
                </p>
                <p className={styles['card-author']}>
                  Written by
                  <i> {book.author}</i> in {book.publishingYear}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
