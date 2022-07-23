import React from 'react';
import styles from './cardsskeleton.module.css';

export function CardsSkeleton(props: { cardCount: number }) {
  const cards: Array<number> = [];
  for (let index = 0; index < props.cardCount; index++) {
    cards.push(index);
  }

  return (
    <>
      {cards.map((cardEntry) => (
        <div key={cardEntry} className={styles['flex-center']}>
          <div className={styles['flex-col-body']}>
            <div className={styles['flex-col-justify']}>
              <div className={styles['p-6']}>
                <h2 className={styles['h2-skeleton']}></h2>
                <h1 className={styles['h1-skeleton']}></h1>
                <p className={styles['p-skeleton']}></p>
                <p className={styles['p-skeleton']}></p>
                <p className={styles['p-skeleton']}></p>
                <div className={styles['content-skeleton']}>
                  <a className={styles['a-skeleton']}></a>
                  <span className={styles['span-skeleton']}></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
