import React from "react"

import { NavbarBrand, Container } from "react-bootstrap";

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';


const Footer = () => {

    return (
        <>

            <div className="footer bg-dark">

                <Container fluid className="d-flex flex-row justify-content-between align-items-center" style={{ width: '95%' }}>
                    <div>

                        <NavbarBrand className='text-white logo'>Sell</NavbarBrand>

                        <div className="social-icons">

                            <FacebookIcon className="text-white me-2" style={{ fontSize: '0.8rem' }} />
                            <InstagramIcon className="text-white me-2" style={{ fontSize: '0.8rem' }} />
                            <PinterestIcon className="text-white" style={{ fontSize: '0.8rem' }} />

                        </div>

                    </div>

                    <div className="text-white" style={{ fontSize: '0.8rem' }}>
                        © 2020 Sell company. All rights reserved.
                    </div>

                </Container>

            </div>
        </>
    )
}

export default Footer;