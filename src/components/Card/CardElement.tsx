import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
// import { red } from '@mui/material/colors';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import BalanceOutlinedIcon from '@mui/icons-material/BalanceOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { NewProducts } from '../../consts/products'

interface Props {
    cardItem: NewProducts,
    clickHandler: (e: any) => void
}
export const CardElement = ({ cardItem, clickHandler }: Props) => {

    return (
        <Card sx={{ width: '317px', margin: '5px 20px' }}>
            <CardHeader
                action={
                    <>
                        <IconButton aria-label="settings">
                            <BalanceOutlinedIcon />
                        </IconButton><IconButton aria-label="settings">
                            <FavoriteBorderOutlinedIcon />
                        </IconButton></>
                }
            // title="Shrimp and Chorizo Paella"
            // subheader="September 14, 2016"
            />
            <CardMedia
                component="img"
                height="250"
                src={cardItem.source}
                alt="Paella dish"
                sx={{ width: '45%', margin: '0 auto', objectFit: 'contain' }}
                id={cardItem.id}
                onClick={clickHandler}
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {cardItem.description}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <ShoppingCartOutlinedIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
}
