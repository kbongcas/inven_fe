import React from 'react';
import {Modal} from "react-bootstrap";
import styled from "styled-components";

const FormModal = ({show, onHide, children}) => {
    return (
        <SModal
            show={show}
            onHide={onHide}
            size="lg"
        >
            {children}
        </SModal>
    );
};


const SModal = styled(Modal)`
  background-image: url('../../../assets/battle-axe.png');
  background-size: contain;
`

export default FormModal;
