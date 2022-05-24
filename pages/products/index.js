import path from 'path';
import fs from 'fs/promises';
import Head from 'next/head';
import ProductsList from '../../components/products/productsList';

function AllProductsPage(props) {
  const { products } = props;
  return (
    <>
      <Head>
        <title>Ayrashee Gyo - Japanese brand toys for sale in the UK</title>
        <meta
          name="description"
          content="Cute Japanese plush toys for sale in the UK at competitve prices. Stockists of San-X Sumikko Gurashi and Sanrio. Free delivery."
        />
        <meta
          name="keywords"
          content="Japanese, Plush, Sanrio, San-X, Sumikko Gurashi"
        ></meta>
      </Head>
      
      <ProductsList
        title="All Plushies"
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

  const availableProducts = data.products.filter(
    (item) => item.quantity > 0
  );

  return {
    props: {
      products: availableProducts,
    }   
  }; 
}

export default AllProductsPage;
