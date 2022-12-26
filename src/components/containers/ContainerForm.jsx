import React, {useState} from 'react';
import {Form, FormControl, FormGroup, InputGroup, Modal, Image} from "react-bootstrap";
import styled from "styled-components";
import {useDispatch} from "react-redux";
import {SFormControl, SFormLabel} from "../shared/Form/TextInput";
import ModalHeader from "../shared/Modal/ModalHeader";
import ModalFooter from "../shared/Modal/ModalFooter";
import {createContainer, updateContainer} from "../../slices/containersSlice";

const ContainerForm = ({show, onHide, container}) => {
    const logo = ImageData.battleAxe;
    const [validated, setValidated] = useState(false);
    const [containerData, setContainerData] = useState({
        name: container ? container.name : 'name',
        description: container ? container.description : 'description'
    })
    const dispatch = useDispatch();


    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.currentTarget;
        if (!form.checkValidity()){
            setValidated(true)
            return;
        }

        if(container){
            //update
            dispatch((updateContainer( {
                containerId: container.id,
                container: containerData
            })))
        }
        else{
            dispatch(createContainer(containerData));
        }
        onHide()
    }
    
    const handleInputChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setContainerData(prevData =>
            ({
                ...prevData,
                [name]: value
            })
        )
    }

    const handleCancel = () => {
        onHide();
    }
    
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
        >
            <ModalHeader>
                {container ? 'Update Contianer' : 'Create Container'}
            </ModalHeader>
            <StyledForm
                noValidate
                validated={validated}
                id="itemCreateForm"
                onSubmit={handleSubmit}
            >
                <div className="row">
                    <div className="col-4">
                            <StyledImage
                                src={logo}
                                alt=""
                            />
                            <FormControl className="form-control-sm" type="file" />
                    </div>
                    <FormGroup className="col d-flex flex-column">
                        <SFormLabel>Name</SFormLabel>
                        <InputGroup hasValidation>
                            <SFormControl
                                required
                                type="text"
                                name="name"
                                id="name"
                                value={containerData.name}
                                onChange={handleInputChange}
                            />
                            <FormControl.Feedback tooltip>Must not be empty</FormControl.Feedback>
                        </InputGroup>
                        <SFormLabel>Description</SFormLabel>
                        <InputGroup className="flex-grow-1">
                            <DescriptionInputTextArea
                                className="form-control"
                                as="textarea"
                                name="description"
                                id="description"
                                value={containerData.description}
                                onChange={handleInputChange}
                            />
                        </InputGroup>
                    </FormGroup>
                </div>
            </StyledForm>
            <ModalFooter>
                <button
                    className="btn btn-link btn-rounded"
                    onClick={handleCancel}
                >
                    Cancel
                </button>
                <button
                    type="submit"
                    className="btn btn-primary btn-rounded"
                    form="itemCreateForm"
                >
                    {container ? 'Update' : 'Create'}
                </button>
            </ModalFooter>
        </Modal>
    );
};

const StyledImage = styled(Image)`
  width: 80px;
  height: 80px;
  margin: 10px;
`

const StyledForm = styled(Form)`
    margin: 20px;
`


const DescriptionInputTextArea = styled.div`
  font-size: 14px;
  margin: 0;
  resize: none;
  width: 100%;
  height: 100%;
`

export default ContainerForm;
