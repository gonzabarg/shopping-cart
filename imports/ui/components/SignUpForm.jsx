import React from "react";
import { useNavigate } from "react-router";


import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';


import { Accounts } from 'meteor/accounts-base';

const SignUpForm = () => {

    const navigate = useNavigate();

    const [username, setUsername] = React.useState();
    const [email, setEmail] = React.useState();
    const [password, setPassword] = React.useState();
    const [error, setError] = React.useState(null);

    const signUp = (e) => {

        e.preventDefault();

        console.log('Signing up');

        Accounts.createUser({ username, email, password }, (err) => {

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
        <div className="w-100">

            <div className="w-100 py-3 px-2 bg-light">

                <h6 className="text-uppercase mb-0">
                    New Account
                </h6>

            </div>

            <div className="py-3 px-2">
                <p style={{ fontSize: '1.2rem', fontWeight: 'light' }}>
                    Not our registered customer yet?
                </p>

                <hr />

                <Form>

                    <Form.Group className="mb-4">
                        <Form.Label className="text-muted">Username</Form.Label>
                        <Form.Control type="text" className="rounded-0" id="username" value={username || ""} onChange={(e) => setUsername(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-4" >
                        <Form.Label className="text-muted">Email</Form.Label>
                        <Form.Control type="email" className="rounded-0" id="emailRegister" value={email || ""} onChange={(e) => setEmail(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-4">
                        <Form.Label className="text-muted">Password</Form.Label>
                        <Form.Control type="password" className="rounded-0" id="passwordRegister" value={password || ""} onChange={(e) => setPassword(e.target.value)} />
                    </Form.Group>

                    <div className="mb-4 text-center">

                        <Button variant="outline-dark rounded-0 w-25" type="submit" onClick={signUp}> Sign up </Button>

                    </div>

                    {error && <Alert variant="danger"> {error.reason}</Alert>}
                </Form>

            </div>
        </div>
    )
}

export default SignUpForm;