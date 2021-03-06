import path from 'path';
import fs from 'fs/promises';
import Head from 'next/head';
import HomeHeading from '../components/home/home-heading';
import ProductsList from '../components/products/productsList';

function HomePage(props) {
  const { products } = props;
  
  return (
    <>
      <Head>
        <title>
          Japanese San-X Sumikko Gurashi and Sanrio UK shop - Ayrashee Gyo
        </title>
        <meta
          name="description"
          content="Cute Japanese plush toys for sale in the UK at competitive prices. Stockists of San-X Sumikko Gurashi and Sanrio. Free delivery."
        />
        <meta
          name="keywords"
          content="Japanese, Plush, Sanrio, San-X, Sumikko Gurashi"
        ></meta>
      </Head>
      <HomeHeading />

      <ProductsList
        title="Featured Plushies"
        products={products}
        gridType="grid--2-cols"
      />
    </>
  );
}

export async function getStaticProps(context) {
  const filePath = path.join(process.cwd(), 'data', 'products.json');
  const jsonData = await fs.readFile(filePath, 'utf8');
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

  const featuredProducts = data.products.filter((item) => item.featured);

  return {
    props: {
      products: featuredProducts,
    }
  }; 
}

export default HomePage;
