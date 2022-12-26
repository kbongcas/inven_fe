import React from 'react';
import styled from "styled-components";

const ModalHeader = ({children}) => {
    return (
        <StyledModalHeader className="modal-header">
            <h4 className="mb-0 fw-bold flex-grow-1">{children}</h4>
        </StyledModalHeader>
    );
};


const StyledModalHeader = styled.div`
  background-color: var(--bg-2);
`

export default ModalHeader;
