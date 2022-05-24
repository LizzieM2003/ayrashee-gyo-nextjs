import path from 'path';
import fs from 'fs/promises';
import Head from 'next/head';
import ProductsList from '../components/products/productsList';

function SanrioPage(props) {
  const { products } = props;
  return (
    <>
      <Head>
        <title>Sanrio Plush UK shop - Ayrashee Gyo</title>
        <meta
          name="description"
          content="Cute Japanese Sanrio plush toys for sale in the UK at competitve prices. Free delivery."
        />
        <meta
          name="keywords"
          content="Japanese, Plush, Sanrio, Pompompurin, My Melody, Pochaco, Cinnamoroll"
        ></meta>
      </Head>
      <ProductsList
        title="Sanrio Shop"
        products={products}
        gridType="grid--2-cols"
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

  const sanrioProducts = data.products.filter(
    (item) => item.brand === 'Sanrio' && item.quantity > 0
  );

  return {
    props: {
      products: sanrioProducts,
    }
  }; // useful if you have fast changing data
}

export default SanrioPage;
