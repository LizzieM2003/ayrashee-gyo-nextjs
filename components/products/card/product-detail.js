import { useState } from 'react';
import { useRouter } from 'next/router';

import ProductImage from './product-image';
import Button from '../../ui/button';
import styles from './product-detail.module.css';

function ProductDetail(props) {
  const router = useRouter();

  const {
    id,
    main_image,
    main_images,
    other_images,
    brand,
    title,
    price,
    quantity,
    description,
    ebay_url,
  } = props.product;

  const [productImg, setProductImg] = useState(main_images);

  const smallImages = other_images.map((image, index) => (
    <div key={index} className={styles['small-image']} onClick={() => setProductImg(image)}>
      <ProductImage src={image.png} alt={`${brand} ${title}`} mainImages={image} />
    </div>
  ));

  return (
    <div className={styles.grid}>
      <div className={styles.images}>
        <div className={styles['main-image']}>
          <ProductImage
            src={productImg.png}
            alt={`${brand} ${title}`}
            mainImages={productImg}
          />
        </div>
        <div className={styles['other-images']}>{smallImages}</div>
      </div>
      <div className={styles.product}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles['product-brand']}>by {brand}</p>
        <p className={styles['product-price']}>£{price}</p>
        <p className={styles['product-quantity']}>Only {quantity} left!</p>
        <p className={styles['product-description']}>{description}</p>
        <div className={styles['button-container']}>
          <Button
            size="btn-large"
            type="btn-outline"
            onClick={() => router.back()}
          >
            Go Back
          </Button>
          <a href={ebay_url} target="_blank" rel="noreferrer">
            <Button size="btn-large" type="btn-full">
              Buy me on ebay
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
