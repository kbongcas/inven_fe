import React from 'react';
import {Modal} from "react-bootstrap";

const FormModal = ({show, onHide, children}) => {
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
        >
            {children}
        </Modal>
    );
};

export default FormModal;
