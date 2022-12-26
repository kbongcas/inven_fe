import React from 'react';
import styled from "styled-components";

const ModalFooter = ({children}) => {
    return (
        <StyledModalFooter className="modal-footer">
            {children}
        </StyledModalFooter>
    );
};

const StyledModalFooter = styled.div`
  border: none;
`

export default ModalFooter;
