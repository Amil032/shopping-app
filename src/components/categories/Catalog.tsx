import { Card } from '@mui/material';
import React, { useState } from 'react';
import { catalogItems, subCategories } from '../../consts/catalog';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import classes from './Index.module.css';
import { Categories } from '../../consts/catalog'
interface Props {
    show: boolean;
    setShow: (data: boolean) => void;
    setCategory: (data: Sub[]) => void;
}
interface Sub {
    name: string;
    description: string;
}
export const Catalog = ({ show, setShow, setCategory }: Props) => {
    const [categories, setSubCategories] = useState([]);
    const [id, setId] = useState('')
    for (const property in subCategories) {
        if (property === id) {

            setCategory(subCategories[property])
        }
    }
    return (
        <Card sx={{
            height: '432px', backgroundColor: 'white',
            minWidth: '314px',
            padding: '0'
        }}
            className={classes.category}
        >
            <div >
                {
                    catalogItems.map((item) => (
                        <div key={item.name} id={item.name} style={{ display: 'flex', justifyContent: 'space-between' }}
                            onMouseOver={(e) => {
                                setShow(true);
                                setId(e.currentTarget.id)

                            }}
                            onMouseOut={() => setShow(false)}
                        >

                            <strong style={{ marginLeft: '20px' }}>{item.description}</strong>
                            <div><ChevronRightIcon /></div>
                        </div>
                    ))
                }
            </div>
        </Card>
    );
};

