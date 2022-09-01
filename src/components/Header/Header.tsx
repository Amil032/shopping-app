import { FC } from 'react';
import { NavbarDown } from './NavbarDown/NavbarDown';
import { Navbar } from './NavbarUp/Navbar';
export const Header = ({ children }: { children: JSX.Element }) => {

    return (
        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
            <Navbar />
            <NavbarDown />
            {children}
        </div>

    );
};

