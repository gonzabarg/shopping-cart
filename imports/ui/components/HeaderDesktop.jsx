import React from "react";

import Dropdown from 'react-bootstrap/Dropdown';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

import { Link } from "react-router-dom";

const HeaderDesktop = ({ username }) => {

    const desktopFlex = {
        width: '95%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }

    const logoContainer = {
        width: 'auto'
    }

    const optionsContainer = {
        width: 'auto',

    }

    const navbarItems = {

        width: 'auto',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginBottom: '0'

    }

    const navbarItem = {
        color: 'rgba(0, 0, 0, 0.95)',
        fontSize: '1rem',
        fontWeight: 700,
        padding: '0.5rem 1.5rem',
        textDecoration: 'none'
    }

    const menuContainer = {
        width: 'auto',
        padding: '0.5rem 1.5rem',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }

    return (
        <>

            {console.log('VIENDO EL HEADER DESKTOP')}
            <div style={desktopFlex}>
                <div style={logoContainer}>

                    <Link className="text-decoration-none text-dark" to="/">

                        <span className="logo">
                            Sell
                        </span>

                    </Link>

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

                    {username ?
                        <p className="hk-grotesk-semi-bold mb-0 me-2">
                            {username}
                        </p> :
                        console.log('No hay usuario logueado')
                    }

                    <Dropdown>
                        <Dropdown.Toggle variant="transparent" id="dropdown-basic">
                            <AccountCircleOutlinedIcon style={{ color: 'black' }} />
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">
                                <Link className="text-decoration-none text-dark " to='/user-page'>
                                    My profile
                                </Link>
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Logout</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                </div>
            </div>
        </>
    )

}

export default HeaderDesktop;