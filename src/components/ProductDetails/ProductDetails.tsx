import { Details } from './Details/Details';
import { Image } from './ProductImage/Image';
import classes from './ProductDetails.module.css';
import { Features } from './Features/Features';
import { Card, Paper } from '@mui/material';
import { useParams } from 'react-router-dom';
import { newProducts } from '../../consts/products';
import { ImageModal } from './ImageModal/ImageModal';
import { useState } from 'react';
export const ProductDetails = () => {
    const { id } = useParams();
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const product = newProducts.filter((item) => item.id === id)
    return (
        <div style={{ display: 'flex', marginTop: '20px', flexDirection: 'column' }}>
            <Paper style={{ display: 'flex', marginBottom: '40px' }} >
                <div style={{ height: '500px', width: '40%', padding: '10px' }} >
                    <Image product={product} handleOpen={handleOpen} />
                </div>
                <Details product={product[0]} />
            </Paper>
            <ImageModal open={open} handleClose={handleClose} />
            <Features />

        </div>


    );
};

