import { CardElement } from '../Card/CardElement';
import { Scroll } from '../Scroll/Scroll';
import { NewProducts } from '../../consts/products';
import classes from './NewProducts.module.css';
import { useNavigate } from 'react-router-dom';
export const NewProduct = () => {
    const navigate = useNavigate()
    const clickHandler = (e: any) => {
        navigate(`/blog/${e.currentTarget.id}`);
    }
    return (
        <div className={classes.container}>

            <Scroll cardElement={(products: NewProducts) => <CardElement cardItem={products} clickHandler={clickHandler} />} />


        </div>

    )

}