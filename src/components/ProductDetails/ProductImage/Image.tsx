import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import classes from './Image.module.css';
import { products } from '../../../consts/product';
import { useState } from 'react';
export const Image = () => {
  const settings = {
    customPaging: function (i: number) {

      return (
        <div >
          <img src={`${products[i].source}`} style={{ width: '50px', objectFit: 'contain' }} />
        </div>
      );
    },
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: `  ${classes.paging}`,
    arrows: false

  };
  return (
    <div  >
      <Slider {...settings}>
        {products.map((item) => (
          <div >
            <img src={item.source} style={{ margin: '0px auto', width: '80%' }} />
          </div>
        ))}


      </Slider>
    </div>
  );
};



