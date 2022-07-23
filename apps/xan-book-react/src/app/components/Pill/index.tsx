import styles from './pill.module.css';

export const Pill = (props: { value: string }) => {
  return <span className={styles['pill']}>{props.value}</span>;
};
