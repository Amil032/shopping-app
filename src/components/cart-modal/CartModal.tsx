import { Card, CardContent, CardHeader, CardActions, Typography, Box, Button, IconButton } from '@mui/material';
import { CartItems } from './CartItems/CartItems';
import classes from './CartModal.module.css';
import { cart } from '../../consts/cart';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
interface Props {
    setVisibility: (data: boolean) => void
}
export const CartModal = ({ setVisibility }: Props) => {
    return (
        <Card className={classes.main_container}>
            <CardHeader
                action={
                    <IconButton onClick={() => setVisibility(false)}>
                        <CloseOutlinedIcon />
                    </IconButton>
                }
                titleTypographyProps={{ fontWeight: 'bolder', color: 'red' }}
                title='Sebet'

            />

            <CardContent>
                {cart.cartItems.map((item) => (
                    <CartItems item={item} />
                ))}
            </CardContent>
            <CardActions sx={{ backgroundColor: 'white' }} >
                <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', padding: '20px' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginBottom: '40px' }}>
                        <Typography>Cemi</Typography>
                        <Typography>{cart.totalAmount}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                        <Typography>Sebet</Typography>
                        <Button variant='contained' color="error">Sifarisi resmilewdir</Button>
                    </Box>
                </Box>

            </CardActions>
        </Card >
    );
};

