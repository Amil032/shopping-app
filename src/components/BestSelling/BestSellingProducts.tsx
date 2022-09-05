import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { newProducts, NewProducts } from '../../consts/products';
import { CardElement } from '../Card/CardElement';
import { Scroll } from '../Scroll/Scroll';
import classes from './BestSellingProducts.module.css'
import { useDispatch } from 'react-redux';
import { bestsellingService } from '../../services/products.service';

export const BestSellingProducts = () => {

    useEffect(() => {
        // const a = bestsellingService();
        // console.log(a, 'bestselling')
        fetch('/movies').then(res => res.json).then(res => console.log(res)).catch(err => console.log(err))
    }, [])
    return (
        <div className={classes.bestSelling}>
            <Scroll scrollProducts={newProducts} />
        </div>
    );
};
