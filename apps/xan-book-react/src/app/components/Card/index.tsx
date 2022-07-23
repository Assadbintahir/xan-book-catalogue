import React, { PropsWithChildren, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookPayload } from '../../features/books/types';
import styles from './card.module.css';

export function Card(props: BookPayload) {
  const navigate = useNavigate();

  return (
    <div className={styles['flex-center']}>
      <div className={styles['flex-col-body']}>
        <div className={styles['flex-col-justify']}>
          <h5 className={styles['card-title']}>{props.title}</h5>
          <p className={styles['card-description']}>{props.shortDescription}</p>
          <div className={styles['card-bottom-row']}>
            <p className={styles['card-author']}>{`Written by ${props.author} in ${props.publishingYear}`}</p>
            <button
              data-testid="read-more-button"
              onClick={() => navigate(`/book/${props.id}`)}
              type="button"
              className={styles['read-more-button']}
            >
              Read more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
