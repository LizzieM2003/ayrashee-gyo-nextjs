import path from 'path';
import fs from 'fs/promises';
import Head from 'next/head';

import ProductsList from '../components/products/productsList';

function SanXPage(props) {
  const { products } = props;
  return (
    <>
      <Head>
        <title>San-X Sumikko Gurashi UK shop - Ayrashee Gyo</title>
        <meta
          name="description"
          content="Cute Japanese Sumikko Gurashi plush toys for sale in the UK at competitive prices. Free delivery."
        />
        <meta
          name="keywords"
          content="Japanese, Plush, San-X, Sumikko Gurashi"
        ></meta>
      </Head>
      <ProductsList
        title="San-X Sumikko Gurashi Shop"
        products={products}
        gridType="grid--3-cols"
      />
    </>
  );
}

export async function getStaticProps(context) {
  const filePath = path.join(process.cwd(), 'data', 'products.json');
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  if (!data) {
    return {
      redirect: {
        destination: '/', // redirect to specified page
      },
    };
  }

  if (data.products.length === 0) {
    return { notFound: true }; // will render 404 page
  }

  const sanXProducts = data.products.filter((item) => item.brand === 'San-X' && item.quantity > 0);

  return {
    props: {
      products: sanXProducts,
    }
  }; 
}

export default SanXPage;
