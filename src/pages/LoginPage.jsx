import React from 'react';
import styled from "styled-components";
import {Container} from "react-bootstrap";
import LoginForm from "../components/user/LoginForm";

const LoginPage = () => {
    return (
        <ItemsPageContainer>
            <LoginForm />
        </ItemsPageContainer>
    );
}

const ItemsPageContainer = styled.div`
  background-color: var(--bg-1);
  width: 100%;
`
export default LoginPage;
