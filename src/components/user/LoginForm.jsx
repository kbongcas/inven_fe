import React, {useEffect, useState} from 'react';
import {Col, Button, Row, Container, Card, Form, Spinner, InputGroup} from 'react-bootstrap';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {login, reset} from "../../slices/authSlice";

const LoginForm = () => {

    const [errorMessage, setErrorMessage ] = useState('')
    const [email, setEmail ] = useState('kbongcasmis@gmail.com')
    const [password, setPassword ] = useState('password')
    const [validated, setValidated] = useState(false);
    const { user, isLoading, isError, isSuccess, message} = useSelector( (state) => state.auth)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if(isError){
            setErrorMessage(message)
        }

        if(isSuccess || user){
            navigate('/items')

        }

        dispatch(reset())

    }, [user,isError,isSuccess, message, navigate, dispatch])

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        if (!form.checkValidity()){
            setValidated(true)
            return;
        }

        dispatch(login({
            email: email,
            password: password
        }))
    }
    
    return (
        <div>
            <Container>
                <Row className="vh-100 d-flex justify-content-center align-items-center">
                    <Col md={8} lg={6} xs={12}>
                        <Card className="px-4">
                            <Card.Body>
                                <div className="mb-3 mt-md-4">
                                    <h2 className="fw-bold mb-2 text-center text-uppercase ">
                                        Login
                                    </h2>
                                    <div className="mb-3">
                                        <Form noValidate validated={validated} onSubmit={handleLogin}>
                                            { isLoading ? <Spinner /> : (
                                                <div>
                                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                                        <Form.Label >Email address</Form.Label>
                                                        <InputGroup hasValidation>
                                                            <Form.Control
                                                                required
                                                                type="email"
                                                                placeholder="Enter email"
                                                                value={email}
                                                                onChange={(e) => setEmail(e.target.value)}
                                                            />
                                                            <Form.Control.Feedback type="invalid">Please enter valid email</Form.Control.Feedback>
                                                        </InputGroup>
                                                    </Form.Group>

                                                    <Form.Group
                                                        className="mb-3"
                                                        controlId="formBasicPassword"
                                                    >
                                                        <Form.Label>Password</Form.Label>
                                                        <InputGroup hasValidation>
                                                            <Form.Control
                                                                required
                                                                type="password"
                                                                placeholder="Password"
                                                                value={password}
                                                                onChange={(e) => setPassword(e.target.value)}
                                                            />
                                                            <Form.Control.Feedback type="invalid">Please Enter valid password</Form.Control.Feedback>
                                                        </InputGroup>
                                                    </Form.Group>
                                                    <Form.Group
                                                        className="mb-3"
                                                        controlId="formBasicCheckbox"
                                                    ></Form.Group>
                                                    <div className="d-grid">
                                                        <Button variant="primary" type="submit">
                                                            Log in
                                                        </Button>
                                                    </div>
                                                    <p>{errorMessage}</p>
                                                </div>
                                            )} 
                                        </Form>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default LoginForm;
