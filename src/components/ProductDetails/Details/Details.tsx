import { Button } from '@mui/material';
import classes from './Details.module.css';
import { ProductRating } from '../../ProductRating/ProductRating';
import { AddToFavorite } from '../../favorite/AddToFavorite';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import PaymentOutlinedIcon from '@mui/icons-material/PaymentOutlined';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../store/slices/addToCart';
import { NewProducts } from '../../../consts/products';
export const Details = ({ product }: { product: NewProducts }) => {
    const dispatch = useDispatch()
    const addTocartHandler = () => {
        dispatch(addToCart(product))
    }
    return (
        <div style={{ flex: '1' }}>
            <div className={classes.productName}>{product.name}</div>
            <ProductRating />
            <div>
                <h1>{product.price} m</h1>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '600px' }}>
                <Button variant='contained' color='error' sx={{ width: '35%', fontSize: '14px' }} onClick={addTocartHandler}>Səbətə əlavə et</Button>
                <Button variant='outlined' sx={{ width: '35%' }}> 1 Kliklə al</Button>
                <AddToFavorite productId={'4'} />
            </div>
            <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column' }} >
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <LocalShippingOutlinedIcon /><p style={{ marginLeft: '10px', margin: '5px' }}>Çatdirilma</p>
                </div>
                <p style={{ margin: '0px' }}>
                    Baki segeri daxilinde odenissizdir
                </p>
            </div>
            <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column' }} >
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <PaymentOutlinedIcon /><p style={{ marginLeft: '10px', margin: '5px' }}>Odenis</p>
                </div>
                <p style={{ margin: '0px' }}>
                    Catdirilma zamani nagd ve ya kartla
                </p>
            </div>
            <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column' }} >
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <WorkspacePremiumOutlinedIcon /><p style={{ marginLeft: '10px', margin: '5px' }}>Zemanet</p>
                </div>
                <p style={{ margin: '0px' }}>
                    1 il resmi zemanet verilir
                </p>
            </div>
        </div >
    );
};

