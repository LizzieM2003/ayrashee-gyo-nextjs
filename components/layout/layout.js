import styles from './layout.module.css';
import MainHeader from './main-header';
import Footer from './footer';

function Layout(props) {
  return (
    <div className={styles.grid}>
      <MainHeader />

      <main>{props.children}</main>

      <Footer />
    </div>
  );
}

export default Layout;
