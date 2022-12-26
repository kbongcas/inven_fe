import React, {useEffect, useState} from 'react';
import {Col, Button, Row, Container, Card, Form, InputGroup, Spinner} from 'react-bootstrap';
import {register, reset} from "../../slices/authSlice";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

const RegistrationForm = (props) => {

    const [errorMessage, setErrorMessage ] = useState('')
    const [email, setEmail ] = useState('')
    const [password, setPassword ] = useState('')
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


    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        if (!form.checkValidity()){
            setValidated(true)
            return;
        }
        
        dispatch( register({
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
                                        Register
                                    </h2>
                                    <div className="mb-3">
                                        <Form noValidate validated={validated} onSubmit={handleRegister}>
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
                                                        Register
                                                    </Button>
                                                </div>
                                                <p>{errorMessage}</p>
                                            </div>
                                            )} 
                                        </Form>
                                        <div className="mt-3">
                                            <p className="mb-0  text-center">
                                                Already have an account?{' '}
                                                <a href={'/login'} className="text-primary fw-bold">
                                                    Sign In
                                                </a>
                                            </p>
                                        </div>
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

export default RegistrationForm;
