import React, { useState } from 'react';
import classes from './NavbarDown.module.css'
import Search from './Search';
import WidgetsIcon from '@mui/icons-material/Widgets';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import BalanceOutlinedIcon from '@mui/icons-material/BalanceOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useNavigate } from 'react-router-dom';
import { CartModal } from '../../cart-modal/CartModal';
import { CartIcon } from './cart-icon-badge/CartIcon';
export const NavbarDown = () => {
    const navigate = useNavigate()
    const [visibility, setVisibility] = useState(false)
    return (
        <div className={classes.container}>
            <div className={classes.innerContainer}>
                <div className={classes.search}><WidgetsIcon /><p>MALLARIN KATALOQU</p></div>
                <div style={{ flex: '2', marginRight: '5%' }}><Search /></div>

                <div style={{ flex: '1', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div className={classes.account}>
                        <div style={{ border: '2px solid white', borderRadius: '50%', padding: '0', display: 'flex', justifyContent: 'center' }}>
                            <PermIdentityIcon />
                        </div>
                        <p>Hesaba giriş</p>
                    </div>
                    <div><BalanceOutlinedIcon /></div>
                    <div><FavoriteBorderOutlinedIcon /></div>
                    <div onClick={() => setVisibility(prev => !prev)}><CartIcon /></div>
                </div>
                {visibility && <CartModal setVisibility={setVisibility} />}
            </div>

        </div>
    );
};

