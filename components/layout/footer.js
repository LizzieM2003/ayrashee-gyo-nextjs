import Logo from '../ui/logo';
import styles from './footer.module.css';

function Footer(props) {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        <Logo height="100" width="100" />
        <p className={styles.copyright}>
          Copyright &copy; {currentYear} by Ayrashee Gyo. All rights reserved.
        </p>
      </div>

      <div className={styles['contact-col']}>
        <p className={styles['footer-heading']}>Contact us</p>
        <address className={styles.contacts}>
          <p className={styles.address}>
            We are based in Harrow, Greater London, UK
          </p>
          <p>
            <a className={styles['footer-link']} href="ayrasheegyo@gmail.com">
              ayrasheegyo@gmail.com
            </a>
          </p>
        </address>
      </div>

      <div className={styles['ebay-col']}>
        <p className={styles['footer-heading']}>Ebay Store</p>

        <p>
          <a
            className={styles['footer-link']}
            href="https://www.ebay.co.uk/usr/ayrashee-gyo"
            target="_blank"
            rel="noreferrer"
          >
            Items for sale on ebay
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
