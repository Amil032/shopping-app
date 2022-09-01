import { Box, Card, CardMedia, IconButton, Typography } from '@mui/material';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import classes from './CartItem.module.css';
export const CartItems = ({ item }: any) => {
    return (
        <Card sx={{ marginBottom: '10px' }}>

            <Box sx={{ display: 'flex', position: 'relative' }}
            >

                <CardMedia
                    component='img'
                    image='assests/products/product1.jpg'
                    sx={{ width: '13%', margin: '10px' }}
                />
                <Box className={classes.cart_item}>
                    <Typography className={classes.cart_item}>
                        {item.description}
                    </Typography>
                    <Typography component='p' variant='h5'>
                        {item.price}
                    </Typography>
                    <Typography>
                        {item.count} ed
                    </Typography>
                </Box>
                <IconButton sx={{ position: 'absolute', right: '4px', top: '4px' }}>
                    <CloseOutlinedIcon sx={{ color: 'red', fontSize: '18px' }} />
                </IconButton>

            </Box>

        </Card >
    );
};

