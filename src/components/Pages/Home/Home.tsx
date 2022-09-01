import React, { useState } from 'react';
import { Slider } from '../../Slider/Slider';
import { Catalog } from '../../categories/Catalog';
import { SubCategories } from '../../categories/SubCategories';
import { NewProduct } from '../../NewProducts/NewProducts';
import { BestSellingProducts } from '../../BestSelling/BestSellingProducts';
import classes from './Home.module.css'
import { useNavigate } from 'react-router-dom';
interface Sub {
    name: string;
    description: string;
}
export const Home: React.FunctionComponent = () => {

    const [show, setShow] = useState(false);
    const [category, setCategory] = useState<Sub[]>([]);
    const navigate = useNavigate()
    const clickHander = (e: any) => {
        navigate(`/blog/${e.currentTarget.id}`);
    }
    return (
        <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }} className={classes.container}>
            <div className={classes.catalogueSLiderWrapper}>

                <Catalog show={show} setShow={setShow} setCategory={setCategory} />

                {
                    show ?
                        <SubCategories show setShow={setShow} category={category} />
                        :
                        <div className={classes.slider}>
                            <Slider />
                        </div>
                }
            </div>

            <NewProduct />
            <BestSellingProducts />



        </div>
    );
};

