import React from 'react';
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from "react-bootstrap";
import styled from "styled-components";

const ModalContainer = ({show, onHide, children}) => {
    return (
        <SModal
            show={show}
            onHide={onHide}
        >
            <SModalHeader>
            </SModalHeader>
            <SModalBody>
                {children}
            </SModalBody>
            <SModalFooter>
            </SModalFooter>
        </SModal>
        
    );
};


const SModal = styled(Modal)`
`

const SModalHeader = styled(ModalHeader)`
  background-color: var(--bg-2);
  color: var(--bg-1);
`

const SModalFooter = styled(ModalFooter)`
  background-color: var(--bg-1);
  border-width: 0;
`

const SModalBody = styled(ModalBody)`
  background-color: var(--bg-1);
  display: flex;
  flex-direction: column;
  align-items: center;
`




export default ModalContainer;
