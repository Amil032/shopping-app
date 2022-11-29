import { Scroll } from '../Scroll/Scroll'
import { newProducts } from '../../consts/products'
import classes from './NewProducts.module.css'
export const NewProduct = () => {
  return (
    <div className={classes.container}>
      <Scroll scrollProducts={newProducts} />
    </div>
  )
}
