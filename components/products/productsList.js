import ProductSummary from './card/product-summary';

import styles from './products-list.module.css';

function ProductsList(props) {
  const { gridType, products, title } = props;
  
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{title}</h2>
      <ul className={`${styles.grid} ${styles[gridType]}`}>
        {products.map((product) => (
          <li key={product.id}>
            <ProductSummary product={product} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ProductsList;
