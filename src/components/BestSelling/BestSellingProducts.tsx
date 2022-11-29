import React, { useEffect } from 'react'
import { newProducts } from '../../consts/products'
import { Scroll } from '../Scroll/Scroll'
import classes from './BestSellingProducts.module.css'

export const BestSellingProducts = () => {
  useEffect(() => {
    // const a = bestsellingService();
    // console.log(a, 'bestselling')
    fetch('/movies')
      .then((res) => res.json)
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
  }, [])
  return (
    <div className={classes.bestSelling}>
      <Scroll scrollProducts={newProducts} />
    </div>
  )
}
