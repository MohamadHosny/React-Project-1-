import React from 'react';
import Header from '../components/Header';
import ProductSlider from '../components/ProductSlider';
import Products from '../components/Products';
import Footer from '../components/Footer';

const Homepage = () => {
  return (
    <>
      <Header />
      <ProductSlider />
      <Products />
      <Footer />
    </>
  );
};

export default Homepage;
