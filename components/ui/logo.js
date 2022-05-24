import Link from 'next/link';
import styles from './logo.module.css';

function Logo(props) {
  const { height, width } = props;
  return (
    <div className={styles.logo}>
      <Link href="/">
        <img
          src="/images/gyo-logo.svg"
          alt="Ayrashee Gyo logo"
          height={height}
          width={width}
        />
      </Link>
      <p className={styles['logo-title']}>Ayrashee Gyo</p>
    </div>
  );
}

export default Logo;
