import { color } from '@mui/system';
import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { navigationConsts } from '../../../consts/navigation-consts';
import { Contact } from './Contact';
import classes from './Index.module.css';
import { Language } from './Language';
export const Navbar = () => {
    const navigate = useNavigate();

    const { routes } = navigationConsts
    return (
        <div className={classes.upperNavbar}>
            <div>
                <h1 style={{ color: 'red' }} onClick={() => navigate('/')}>Logo</h1>
            </div>
            <ul className={classes.list}>
                {
                    routes.map((item, index) => (
                        <li style={{ color: index === 0 ? 'red' : 'inherit' }} onClick={() => navigate(`${item[1]}`)} >
                            {item[0]}
                        </li>
                    ))
                }
            </ul >

            <Contact />
            <Language />


        </div >
    );
};
