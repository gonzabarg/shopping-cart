import React from 'react'

import SignUpForm from '../components/SignUpForm'
import SignInForm from '../components/SignInForm'

import { Container, Row, Col } from 'react-bootstrap'



const UserPage = () => {


    return (
        <>
            <section className='hk-grotesk'>

                <Container>

                    <div className='py-5 text-center'>
                        <h1 className='page-title'>
                            User Page
                        </h1>
                    </div>


                </Container>

            </section>

            <section className='hk-grotesk'>

                <Container>
                    <Row className='justify-content-center'>
                        <Col lg={5}>
                            <SignInForm />
                        </Col>
                        <Col lg={5}>
                            <SignUpForm />
                        </Col>
                    </Row>
                </Container>

            </section>
        </>
    )
}

export default UserPage;