import { useState } from 'react';
import useWindowDimensions from '../hooks/getScreenSize';
import { FixedBottomNavigation } from '../mobile/bottom-navbar/BottomNavigation';

import { NavBar } from '../mobile/Navbar/NavBar';

import { NavbarDown } from './NavbarDown/NavbarDown';
import { Navbar } from './NavbarUp/Navbar';
export const Header = ({ children }: { children: JSX.Element }) => {
    const [visibility, setVisibility] = useState(false);

    const { width, height } = useWindowDimensions();
    return (
        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
            {width > 900 ? <><Navbar /> <NavbarDown visibility={visibility} setVisibility={setVisibility} /></> : <>
                <NavBar visibility={visibility} setVisibility={setVisibility} /><FixedBottomNavigation setVisibility={setVisibility} /></>
            }
            {children}
        </div>

    );
};

