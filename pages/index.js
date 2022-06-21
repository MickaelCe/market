import React from 'react';
import { client } from '../lib/client';
import { Product, FooterBanner, HeroBanner } from '../component';

const Home = ({ products, bannerData }) => {
  return (
    <>
      <HeroBanner heroBanner={ bannerData.length && bannerData[0]} />
      <div className='products-heading'>
        <h2>Best Seller Products</h2>
        <p>Find your new audio gear</p>
      </div>

      <div className='products-container'>
        {products?.map(
          (product) => <Product key={product._id} product={product}/>
        )}
      </div>
      <FooterBanner footerBanner={bannerData && bannerData[0]} />
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