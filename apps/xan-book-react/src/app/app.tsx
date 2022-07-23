import { NavBrand } from './components';
import { AppRoutes } from './routes';
import styles from './app.module.css';

export function App() {
  return (
    <div>
      <NavBrand />
      <div className={styles['page-container']}>
        <div className={styles['page-container-child']}>
          <AppRoutes />
        </div>
      </div>
    </div>
  );
}

export default App;
