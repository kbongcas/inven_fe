import React from 'react';
import styled from "styled-components";
import RegistrationForm from "../components/user/RegistrationForm";

const RegistrationPage = () => {
    return (
        <ItemsPageContainer>
            <RegistrationForm />
        </ItemsPageContainer>
    );
}

const ItemsPageContainer = styled.div`
  background-color: var(--bg-1);
  width: 100%;
`
export default RegistrationPage;
