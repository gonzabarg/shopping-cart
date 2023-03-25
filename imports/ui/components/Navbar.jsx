import React from "react";
import { useEffect } from "react";

import HeaderMobile from "./HeaderMobile";
import HeaderDesktop from "./HeaderDesktop";

const Navbar = () => {

    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 900;

    useEffect(() => {
        const handleResizeWindow = () => setWidth(window.innerWidth);
        // subscribe to window resize event "onComponentDidMount"
        window.addEventListener("resize", handleResizeWindow);
        return () => {
            // unsubscribe "onComponentDestroy"
            window.removeEventListener("resize", handleResizeWindow);
        };
    }, []);


    const background = {
        backgroundColor: 'white',
        width: '100%',
        height: "5.5rem",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'sticky',
        top: '0',
        zIndex: '5'

    }





    return (
        <>
            <nav style={background}>

                {console.log(width > breakpoint)}

                {width > breakpoint ? <HeaderDesktop /> : <HeaderMobile />}

            </nav>
        </>
    )
}

export default Navbar;