import { Button } from '@mui/material';
import classes from './Details.module.css';

export const Details = () => {
    return (
        <div style={{ flex: '1' }}>
            <div className={classes.productName}>Noutbuk Lenovo Legion 5 PRO 16ITH6H 16/i7-11800H/16GB/SSD 1TB/RTX3060 6GB/DOS (82JD000DRK)</div>
            <div>
                <h1>3999.9 m</h1>
            </div>
            <div style={{ display: 'flex' }}>
                <Button variant='contained' color='error' >Səbətə əlavə et</Button>
                <Button variant='outlined'> 1 Kliklə al</Button>
            </div>
        </div>
    );
};

