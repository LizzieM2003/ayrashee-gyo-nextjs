import styles from './home-heading.module.css';
import ProductImage from '../products/card/product-image';

function HomeHeading(props) {
  const images = {
    webp: '/images/header/sumikko-gurashi-2.webp',
    png: '/images/header/sumikko-gurashi-2.png',
  };
  return (
    <section className={styles.grid}>
      <div className={styles.heading}>
        <h1>Ayrashee Gyo</h1>
        <h2>
          Adorable Japanese Sanrio and San-X toys for sale in the UK on ebay.
          Free delivery!
        </h2>
      </div>

      <div className={styles['image-container']}>
        <ProductImage
          src="/images/header/sumikko-gurashi.png"
          alt="Sumikko Gurashi"
          mainImages={images}
        />
      </div>
    </section>
  );
}

export default HomeHeading;
