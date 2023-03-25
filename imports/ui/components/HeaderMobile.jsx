import React from "react";

import { Button } from "@mui/material";

import MenuDialog from "./MenuDialog";

const HeaderMobile = () => {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const flexNavBar = {
        width: '85%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }

    const logoContainer = {

        width: '15%'
    }

    const menuContainer = {
        with: 'auto'
    }

    return (
        <>
            {console.log('VIENDO EL HEADER MOBILE')}
            <div style={flexNavBar}>
                <div style={logoContainer}>
                    <img src="/RecursosCB4/Logo_CB4.svg" alt="" />
                    <img src="/RecursosCB4/CloudBy4.svg" alt="" style={{ marginTop: '0.5rem' }} />

                </div>
                <div style={menuContainer}>
                    <Button onClick={handleClickOpen}>
                        <img src="/resources/BurguerMenu.svg" alt="Menú icon" />
                    </Button>

                    <MenuDialog stateChanger={setOpen} state={open} />
                </div>
            </div>
        </>
    )
}

export default HeaderMobile;