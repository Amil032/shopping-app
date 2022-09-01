import { Details } from './Details/Details';
import { Image } from './ProductImage/Image';
import classes from './ProductDetails.module.css';
import { Features } from './Features/Features';
import { Card, Paper } from '@mui/material';


export const ProductDetails = () => {
    return (
        <div style={{ display: 'flex', marginTop: '20px', flexDirection: 'column' }}>
            <Paper style={{ display: 'flex', marginBottom: '40px' }} >
                <div style={{ height: '500px', width: '40%', padding: '10px' }} >
                    <Image />
                </div>
                <Details />
            </Paper>

            <Features />

        </div>


    );
};

