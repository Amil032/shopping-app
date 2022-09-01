import React from 'react';
import { useNavigate } from 'react-router-dom';
import { NewProducts } from '../../consts/products';
import { CardElement } from '../Card/CardElement';
import { Scroll } from '../Scroll/Scroll';
import classes from './BestSellingProducts.module.css'
export const BestSellingProducts = () => {
    const navigate = useNavigate()
    const clickHandler = (e: any) => {
        navigate(`/blog/${e.currentTarget.id}`);
    }
    return (
        <div className={classes.bestSelling}>
            <Scroll cardElement={(products: NewProducts) => <CardElement cardItem={products} clickHandler={clickHandler} />} />
        </div>
    );
};
