import React, { useEffect } from 'react'
import { newProducts } from '../../consts/products'
import { Scroll } from '../Scroll/Scroll'
import classes from './BestSellingProducts.module.css'

export const BestSellingProducts = () => {
  return (
    <div className={classes.bestSelling}>
      <Scroll scrollProducts={newProducts} />
    </div>
  )
}
