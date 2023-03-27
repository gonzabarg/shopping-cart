import React from "react";
import { Meteor } from 'meteor/meteor'

import { useNavigate } from "react-router";

import { useTracker, useFind, useSubscribe } from "meteor/react-meteor-data"

import Dropdown from 'react-bootstrap/Dropdown';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import { Link } from "react-router-dom";



const HeaderDesktop = ({ username, isLogged, productsQuantity }) => {


    const navigate = useNavigate();

    const handleLogout = (e) => {

        e.preventDefault();

        console.log('Logging out');

        Meteor.logout((err) => {

            if (err) {
                console.log('ERROR EN LOGOUT: ', err);
            }

            console.log('Succesfull logout');

            navigate('/');

        })

    }


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


                <div style={menuContainer}>

                    {username ?
                        <>
                            <p className="hk-grotesk-semi-bold mb-0 me-2">
                                {username}
                            </p>
                            <Dropdown>
                                <Dropdown.Toggle variant="transparent" id="dropdown-basic">
                                    <AccountCircleOutlinedIcon style={{ color: 'black' }} />
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="/user-page">

                                        My profile

                                    </Dropdown.Item>
                                    <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                            <Link to='/cart' className="text-dark text-decoration-none" >
                                <div className="position-relative">
                                    <Badge bg="dark" className="position-absolute top-0" pill style={{ fontSize: '0.5rem', right: '0' }}>
                                        {productsQuantity}
                                    </Badge>
                                    <ShoppingCartOutlinedIcon />
                                </div>
                            </Link>
                        </> :
                        <Link to="/user-page">
                            <Button variant="outline-dark" className="rounded-0">
                                Sign up / Sign in
                            </Button>
                        </Link>
                    }

                </div>
            </div>
        </>
    )

}

export default HeaderDesktop;