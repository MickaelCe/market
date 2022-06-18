import React from 'react';
import { client } from '../lib/client';
import { Product, Footer, HeroBanner } from '../component';

const Home = ({ products, bannerData }) => {
  return (
    <>
      <HeroBanner/>
      <div className='products-heading'>
        <h2>Best Selling product</h2>
        <p>Products</p>
      </div>

      <div className='products-container'>
        {products?.map(
          (product) => product.name
        )}
      </div>
      <Footer/>
    </>
  )
}

export const getServerSideProps = async () => {
  const query = "*[_type == 'product']";
  const products = await client.fetch(query);

  const Bannerquery = "*[_type == 'banner']";
  const bannerData = await client.fetch(Bannerquery);

  return {
    props: { products, bannerData}
  }
}

export default Home;