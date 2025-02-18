import React from 'react';
import { Carousel } from 'react-bootstrap';

const ProductSlider = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src="../../images/image1.jpeg" alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="../../images/image2.jpeg" alt="Second slide" />
      </Carousel.Item>
    </Carousel>
  );
};

export default ProductSlider;
