import Link from 'next/link';
import Logo from '../ui/logo';
import styles from './main-header.module.css';

function MainHeader() {
  return (
    <header className={styles.header}>
      <Logo height="120" width="120" />
      <nav>
        <ul className={styles['main-nav-list']}>
          <Link href="/sanrio-plush">
            <a className={styles['main-nav-link']}>Sanrio</a>
          </Link>
          <Link href="/san-x-plush">
            <a className={styles['main-nav-link']}>San-X</a>
          </Link>
          <Link href="/products">
            <a className={styles['main-nav-link']}>All</a>
          </Link>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
