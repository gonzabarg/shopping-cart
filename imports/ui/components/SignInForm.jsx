import { Meteor } from 'meteor/meteor'
import React from "react"
import { useNavigate } from "react-router"

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'

const SignInForm = () => {

    const navigate = useNavigate();

    const [email, setEmail] = React.useState();
    const [password, setPassword] = React.useState();
    const [error, setError] = React.useState(null);


    const signIn = (e) => {

        e.preventDefault();

        console.log('Signing in');

        Meteor.loginWithPassword(email, password, (err) => {
            if (err) {
                console.log(err);
                setError(err);
                return;
            }

            console.log('Success');
            navigate('/');
        })

    }


    return (

        <>

            <div className="w-100">

                <div className="w-100 py-3 px-2 bg-light">

                    <h6 className="text-uppercase mb-0">
                        Login
                    </h6>

                </div>

                <div className="py-3 px-2">
                    <p style={{ fontSize: '1.2rem', fontWeight: 'light' }}>
                        Already our customer?
                    </p>

                    <hr />

                    <Form>

                        <Form.Group className="mb-4" >
                            <Form.Label className="text-muted">Email</Form.Label>
                            <Form.Control type="email" className="rounded-0" id="emailLogin" value={email || ""} onChange={(e) => setEmail(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-4">
                            <Form.Label className="text-muted">Password</Form.Label>
                            <Form.Control type="password" className="rounded-0" id="passwordLogin" value={password || ""} onChange={(e) => setPassword(e.target.value)} />
                        </Form.Group>

                        <div className="mb-4 text-center">

                            <Button variant="outline-dark rounded-0 w-25" type="submit" onClick={signIn}> Sign in </Button>

                        </div>

                        {error && <Alert variant="danger"> {error.reason}</Alert>}
                    </Form>

                </div>
            </div>
        </>
    )
}

export default SignInForm;