import React from 'react';
import { useSelector } from 'react-redux';
import { selectCart } from '../../../store/slices/AddToCart';

export const Cart = () => {
    const value = useSelector(selectCart)
    console.log(value)
    return (
        <div>

        </div>
    );
};
