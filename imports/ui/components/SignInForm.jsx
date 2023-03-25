import React from "react";
import { Button } from "@mui/material";

const SignInForm = () => {

    const signIn = () => {

        console.log('Signing in');
    }


    return (
        <>
            <Button onClick={() => signIn()}> Sign in </Button>
        </>
    )
}

export default SignInForm;