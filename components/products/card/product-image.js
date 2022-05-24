import styles from './product-image.module.css';

function ProductImage(props) {
  const {
    src,
    alt,
    mainImages
  } = props;

  // this work around is required as there is an async aspect to nextjs
  if (!mainImages) {
    return (
     <p>Loading...</p>
    );
  }

  return (
    <img
      srcSet={mainImages.webp}
      type="image/webp"
      src={src}
      alt={alt}
      className={styles.image}
    />
  );
}

export default ProductImage;
