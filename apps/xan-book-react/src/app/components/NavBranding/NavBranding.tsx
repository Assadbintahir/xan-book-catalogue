import { useNavigate } from 'react-router-dom';
import styles from './navbrand.module.css';

export function NavBrand() {
  const navigate = useNavigate();

  return (
    <div>
      <nav className={styles['navbar']}>
        <div className={styles['navbar-container']}>
          <a onClick={() => navigate('/')} className={styles['navbar-branding']}>
            Xan Book Catalogue
          </a>
        </div>
      </nav>
    </div>
  );
}
