import * as React from 'react';
import Badge, { BadgeProps } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';
import { selectCart } from '../../../../store/slices/addToCart';

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 2,
        border: '2px solid red',
        padding: '0 2px',
    },
}));

export const CartIcon = () => {
    const cartItems = useSelector(selectCart);

    return (

        <StyledBadge badgeContent={cartItems.length} color="error">
            <ShoppingCartOutlinedIcon />
        </StyledBadge>

    );
}
