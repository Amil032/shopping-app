import React from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { NewProducts, newProducts } from '../../consts/products';
import { LeftArrow } from './Arrows';
import { RightArrow } from './Arrows';
import classes from './Scroll.module.css';
import { FunctionComponent } from 'react';
import { CardElement } from '../Card/CardElement';

interface Props {
    scrollProducts: NewProducts[],
}
export const Scroll = ({ scrollProducts }: Props) => {


    return (
        <ScrollMenu
            Header={<div style={{ color: 'black' }}><h1>Best selling products</h1></div>}
            // Footer={<div>FOOTER</div>}
            LeftArrow={LeftArrow}
            RightArrow={RightArrow}
            onWheel={onWheel}
            transitionBehavior="smooth"
            noPolyfill
            wrapperClassName={classes.wrapper}
            scrollContainerClassName={classes.scrollContainer}
        >
            {newProducts.map((item: NewProducts, index) => (
                <CardElement cardItem={item} />
            ))}
        </ScrollMenu>
    );
}
type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>;
function onWheel(apiObj: scrollVisibilityApiType, ev: React.WheelEvent): void {
    const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

    if (isThouchpad) {
        ev.stopPropagation();
        return;
    }

    if (ev.deltaY < 0) {
        apiObj.scrollNext();
    } else if (ev.deltaY > 0) {
        apiObj.scrollPrev();
    }
}