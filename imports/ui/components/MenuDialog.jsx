import React from "react";

import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Fade from '@mui/material/Fade';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

import { Link } from 'react-router-dom';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Fade in={true} appear={false} ref={ref} {...props} />;
});

const MenuDialog = ({ stateChanger, state }) => {


    const handleClose = () => {
        stateChanger(false);
    }

    const footerIcons = {
        width: '75%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        padding: '2.5rem 0',
        borderTop: '1px solid #4361EE'
    }

    const footerLogo = {
        width: '100%'
    }

    const subFooter = {
        fontSize: '0.8rem',
        color: 'white',
        fontFamily: 'Helvetica Now',
        width: '80%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 0'
    }

    const logoConteiner = {

        width: '15%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center'


    }

    const menuContainer = {
        width: '15%',
        display: 'flex',
        justifyContent: 'flex-end'
    }

    return (
        <Dialog
            fullScreen
            open={state}
            onClose={handleClose}
            TransitionComponent={Transition}
        >
            <AppBar sx={{ position: 'relative', alignItems: 'center' }}>
                <Toolbar sx={{ justifyContent: 'space-between', height: '5.5rem', width: '85%' }}>
                    <div style={logoConteiner}>
                        <img src="/RecursosCB4/Logo_CB4.svg" alt="" />
                        <img src="/RecursosCB4/CloudBy4.svg" alt="" style={{ marginTop: '0.5rem' }} />

                    </div>

                    <div style={menuContainer}>
                        <Button onClick={handleClose}>
                            <img src="/RecursosCB4/BurguerMenu.svg" alt="" />
                        </Button>
                    </div>
                </Toolbar>
            </AppBar>

            <div style={{ width: '85%', backgroundColor: '#4361EE', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: '0.2rem', margin: '2rem 0' }}>


                <IconButton
                    edge="start"
                    color="inherit"
                    onClick={handleClose}
                    aria-label="close"
                >
                    <CloseIcon sx={{ color: 'white' }} />
                </IconButton>

            </div>
            <List sx={{ width: '100%', padding: '2.5rem 0' }}>
                <ListItem divider={false} sx={{ width: '70%', margin: '0 auto', padding: '0' }}>

                    <Link to='/' style={{ textDecoration: 'none' }}>
                        <ListItemButton onClick={handleClose} divider={false}>
                            <ListItemText
                                primary="Inicio"
                            />
                        </ListItemButton>
                    </Link>

                </ListItem>
                <Divider />
                <ListItem divider={false} sx={{ width: '70%', margin: '0 auto', padding: '0' }}>

                    <Link to='/nosotros' style={{ textDecoration: 'none' }}>
                        <ListItemButton onClick={handleClose} divider={false}>
                            <ListItemText
                                primary="Nosotros"
                            />
                        </ListItemButton>
                    </Link>

                </ListItem>
                <ListItem divider={false} sx={{ width: '70%', margin: '0 auto', padding: '0' }}>
                    <Link to='/servicios' style={{ textDecoration: 'none' }}>
                        <ListItemButton onClick={handleClose} divider={false}>
                            <ListItemText
                                primary="Servicios"
                            />
                        </ListItemButton>
                    </Link>
                </ListItem>
                <ListItem divider={false} sx={{ width: '70%', margin: '0 auto', padding: '0' }}>
                    <Link to='/salesforce' style={{ textDecoration: 'none' }}>
                        <ListItemButton onClick={handleClose} divider={false}>
                            <ListItemText
                                primary="Salesforce"
                            />
                        </ListItemButton>
                    </Link>
                </ListItem>
                <ListItem divider={false} sx={{ width: '70%', margin: '0 auto', padding: '0' }}>
                    <Link to='/ecommerce' style={{ textDecoration: 'none' }}>
                        <ListItemButton onClick={handleClose} divider={false}>
                            <ListItemText
                                primary="E-commerce"
                            />
                        </ListItemButton>
                    </Link>
                </ListItem>
                <ListItem divider={false} sx={{ width: '70%', margin: '0 auto', padding: '0' }}>
                    <Link to='/proyectos' style={{ textDecoration: 'none' }}>
                        <ListItemButton onClick={handleClose} divider={false}>
                            <ListItemText
                                primary="Proyectos"
                            />
                        </ListItemButton>
                    </Link>
                </ListItem>
                <ListItem divider={false} sx={{ width: '70%', margin: '0 auto', padding: '0' }}>
                    <ListItemButton onClick={handleClose} divider={false}>
                        <ListItemText
                            primary="Contacto"
                        />
                    </ListItemButton>
                </ListItem>
            </List>

            <div style={footerIcons}>

                <Link to="https://uy.linkedin.com/company/cloudby4" style={{ textDecoration: 'none', width: '10%' }}>

                    <img alt="Linkedin logo" style={footerLogo} />

                </Link>

                <Link to="https://www.instagram.com/cloudby4/?hl=es" style={{ textDecoration: 'none', width: '10%' }}>

                    <img alt="Instagram logo" style={footerLogo} />

                </Link>

                <Link to="https://www.behance.net/cloudby4" style={{ textDecoration: 'none', width: '10%' }}>

                    <img alt="Behance logo" style={footerLogo} />

                </Link>

            </div>

            <div style={subFooter}>
                <span>
                    © Copyright 2022 by <b>Cloudby4</b>
                </span>

                <span>
                    <a href="#politicas" style={{ color: 'white' }}>
                        Políticas de privacidad
                    </a>
                </span>
            </div>
        </Dialog>
    )

}

export default MenuDialog;