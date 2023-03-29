import React from "react"
import { Meteor } from 'meteor/meteor'

import { useNavigate } from "react-router"
import { Link } from "react-router-dom"

import Dropdown from 'react-bootstrap/Dropdown'
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'


const HeaderDesktop = ({ username, productsQuantity }) => {


    const navigate = useNavigate();

    const handleLogout = (e) => {

        e.preventDefault();

        Meteor.logout((err) => {

            if (err) {
                console.log('ERROR EN LOGOUT: ', err);
            }

            console.log('Succesfull logout');

            navigate('/');

        })

    }


    return (
        <>
            <div className="header-flex">
                <div className="logo-container">

                    <Link className="text-decoration-none text-dark" to="/">

                        <span className="logo">
                            Sell
                        </span>

                    </Link>

                </div>

                <div className="menu-container">

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