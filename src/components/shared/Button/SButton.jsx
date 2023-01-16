import React from 'react';
import {Button} from "react-bootstrap";
import styled from "styled-components";

const SButton = ({children, onClick}) => {
    return (
        <ButtonPrimary
            className="btn-sm"
            onClick={onClick}
        >
            {children}
        </ButtonPrimary>
    );
};

const ButtonPrimary = styled(Button)`
  background-color: #BBC7A4;
  border-color: var(--bg-2);
  border-width: 1px;
  color: var(--bg-2);
  height: 30px;
  width: 90px;
  font-weight: bold;
  :hover, :focus, :active {
    background-color: #A0B181 !important;
    border-color: var(--bg-2) !important;
    color: var(--bg-2) !important;
  }
`

export default SButton;
