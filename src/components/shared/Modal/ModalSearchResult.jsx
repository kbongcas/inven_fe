import React from 'react';
import {Button} from "react-bootstrap";
import styled from "styled-components";

const ModalSearchResult = ({onClick, children}) => {
    return (
        <SButton
            className="list-group-item list-group-item-action"
            onClick={onClick}
        >
            {children}
        </SButton>
    );
};

const SButton = styled(Button)`
    width: 400px;
    height: 60px;
`

export default ModalSearchResult;
