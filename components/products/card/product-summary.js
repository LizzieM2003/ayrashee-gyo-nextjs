import Link from 'next/link';
import Button from '../../ui/button';
import ProductImage from './product-image';

import styles from './product-summary.module.css';

function ProductSummary(props) {
  const { id, summary_image, main_images, brand, title, price } = props.product;
  const brandStyle = brand.toLowerCase();

  return (
    <Link href={`/products/${id}`}>
      <div className={`${styles.product} center`}>
        <div className={styles['product-image']}>
          <ProductImage
            src={summary_image}
            alt={`${brand} ${title}`}
            mainImages={main_images}
          />
        </div>
        <div className={styles['product-details']}>
          <div className={styles.brand}>
            <span className={`${styles['brand-tag']} ${styles[brandStyle]}`}>
              {brand}
            </span>
          </div>
          <h3 className={styles.title}>{title}</h3>
          <div className={styles['product-footer']}>
            <p className={styles['product-price']}>{`£${price}`}</p>
            <Button type='btn-full'>Show Me More</Button>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProductSummary;
