import React from "react";

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import { Link } from "react-router-dom";

const HeaderDesktop = () => {

    const desktopFlex = {
        width: '95%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }

    const logoContainer = {
        width: '15%'
    }

    const optionsContainer = {
        width: '50%',

    }

    const navbarItems = {

        width: 'auto',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'

    }

    const navbarItem = {
        color: 'rgba(0, 0, 0, 0.95)',
        fontSize: '1rem',
        fontWeight: 700,
        padding: '0.5rem 1.5rem',
        textDecoration: 'none'
    }

    const menuContainer = {
        with: 'auto'
    }

    return (
        <>

            {console.log('VIENDO EL HEADER DESKTOP')}
            <div style={desktopFlex}>
                <div style={logoContainer}>

                    <ShoppingCartIcon />

                </div>

                <div style={optionsContainer}>

                    <ul style={navbarItems}>

                        <Link className="hk-grotesk-semi-bold" to="/" style={navbarItem}>
                            Home
                        </Link>

                        <Link className="hk-grotesk-semi-bold" to="/about" style={navbarItem}>
                            About us
                        </Link>

                        <Link className="hk-grotesk-semi-bold" to="/products" style={navbarItem}>
                            Products
                        </Link>

                    </ul>

                </div>



                {/* <div style={optionsContainer}>

                </div> */}
                <div style={menuContainer}>

                    <Link to='/user-page'>
                        <AccountCircleIcon />
                    </Link>

                </div>
            </div>
        </>
    )

}

export default HeaderDesktop;