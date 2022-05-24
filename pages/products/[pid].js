import path from 'path';
import fs from 'fs/promises';
import Head from 'next/head';
import ProductDetail from '../../components/products/card/product-detail';

function ProductDetailPage(props) {
  const { product } = props;

  if (!product) {
    return <p>Loading...</p>;
  } // if set fallback to blocking nextjs will wait for data before loading so don't need this

  return (
    <>
      <Head>
        <title>Shop {product.title} - Ayrashee Gyo UK</title>
        <meta
          name="description"
          content="Cute Japanese brand plush toys for sale in the UK at competitive prices. Free delivery."
        />
        <meta
          name="keywords"
          content="Japanese, Plush, San-X, Sumikko Gurashi"
        ></meta>
      </Head>
      <section>
        <ProductDetail product={product} />
      </section>
    </>
  );
}

async function getData() {
  const filePath = path.join(process.cwd(), 'data', 'products.json');
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  return data;
}

export async function getStaticProps(context) {
  const { params } = context;
  const productId = params.pid;

  const data = await getData();

  const product = data.products.find((item) => item.id === productId);

  if (!product) {
    return { notFound: true };
  }

  return {
    props: {
      product,
    },
  };
}

export async function getStaticPaths() {
  const data = await getData();

  const ids = data.products.map((product) => product.id);

  const paramPaths = ids.map((id) => ({ params: { pid: id } }));

  return {
    paths: paramPaths,
    fallback: false,
  };
}

export default ProductDetailPage;
