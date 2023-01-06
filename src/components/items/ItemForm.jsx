import React, {useState} from 'react';
import styled from "styled-components";
import {ImageData} from "../../data/testdata";
import {Form, FormControl, FormGroup, Image, InputGroup, Modal} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {createItem, updateItem} from "../../slices/itemsSlice";
import ModalHeader from "../shared/Modal/ModalHeader";
import ModalFooter from "../shared/Modal/ModalFooter";
import {SFormControl, SFormLabel} from "../shared/Form/TextInput";
import FormModal from "../shared/Modal/FormModal";

const ItemForm = ({show, onHide, item}) => {

    const initialState = {
        image: 'default',
        name:  '',
        type: '',
        notes: '',
        weight: '',
        cost: '',
        count: 1,
        description: '',
    }
    
    const logo = ImageData.default;
    const [validated, setValidated] = useState(false);
    const [itemData, setItemData] = useState({
        image: item ? item.image : initialState.image,
        name:  item ? item.name: initialState.name,
        type: item ? item.type : initialState.type,
        notes: item ? item.notes : initialState.notes,
        weight: item ? item.weight : initialState.weight,
        cost: item ? item.cost :  initialState.cost,
        count: item ? item.count : initialState.count,
        description: item ? item.description : initialState.description,
    })

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.currentTarget;
        if (!form.checkValidity()){
            setValidated(true)
            return;
        }
        
        if(item){
            //update
            dispatch((updateItem( {
                itemId: item.id,
                item: itemData
            })))
        }
        else{
            dispatch(createItem(itemData));
        }
        setItemData(initialState);
        onHide()
}

    const handleCancel = () => {
        setItemData(initialState);
        onHide();
    }

    const handleInputChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setItemData(prevData =>
            ({
                ...prevData,
                [name]: value
            })
        )
    }

    return (
        <FormModal
            show={show}
            onHide={onHide}
        >
            <ModalHeader>{item ? 'Update Item' : 'Create Item'}</ModalHeader>
            <StyledForm
                noValidate
                validated={validated}
                id="itemCreateForm"
                onSubmit={handleSubmit}
            >
                <div className="row">
                    <div className="col-4">
                        <StyledImageContainer>
                            <StyledImage
                                src={logo}
                                alt=""
                                className="img-responsive rounded-circle"
                            />
                            <FormControl className="form-control-sm" type="file" />
                        </StyledImageContainer>
                        <div>
                            <InputLabel className="form-label">Weight:</InputLabel>
                            <InputField
                                type="text"
                                className="form-control"
                                name="weight"
                                id="weight"
                                value={itemData.weight}
                                onChange={handleInputChange}
                            />
                            <InputLabel className="form-label">Cost:</InputLabel>
                            <InputField
                                type="text"
                                className="form-control"
                                name="cost"
                                id="cost"
                                value={itemData.cost}
                                onChange={handleInputChange}
                            />
                            <InputLabel className="form-label">Count:</InputLabel>
                            <InputField
                                type="number"
                                className="form-control"
                                name="count"
                                id="count"
                                value={itemData.count}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                    <FormGroup className="col d-flex flex-column">
                        <SFormLabel>Name</SFormLabel>
                        <InputGroup hasValidation>
                            <SFormControl
                                required
                                type="text"
                                name="name"
                                id="name"
                                value={itemData.name}
                                onChange={handleInputChange}
                            />
                            <FormControl.Feedback tooltip>Must not be empty</FormControl.Feedback>
                        </InputGroup>
                        <SFormLabel>Type</SFormLabel>
                        <InputGroup hasValidation>
                            <SFormControl
                                required
                                type="text"
                                name="type"
                                id="type"
                                value={itemData.type}
                                onChange={handleInputChange}
                            />
                        </InputGroup>
                        <SFormLabel>Notes</SFormLabel>
                        <InputGroup className="flex-grow-1">
                            <NotesInputTextArea
                                className="form-control"
                                as="textarea"
                                name="notes"
                                id="notes"
                                value={itemData.notes}
                                onChange={handleInputChange}
                            />
                        </InputGroup>
                    </FormGroup>
                </div>
                <div className="row">
                    <FormGroup >
                        <SFormLabel>Description</SFormLabel>
                        <InputGroup >
                            <DescriptionInputTextArea
                                className="form-control"
                                as="textarea"
                                rows={16}
                                name="description"
                                id="description"
                                value={itemData.description}
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
                    {item ? 'Update' : 'Create'}
                </button>
            </ModalFooter>
        </FormModal>
    );
};



const InputLabel = styled.label`
  font-size: 13px;
  margin: 0;
`
const InputField = styled.input`
  font-size: 13px;
  margin: 0;
`

const NotesInputTextArea = styled.div`
  font-size: 14px;
  margin: 0;
  resize: none;
  width: 100%;
  height: 100%;
`
const DescriptionInputTextArea = styled.div`
  font-size: 14px;
  margin: 0;
  resize: none;
  width: 100%;
`

const StyledImageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const StyledImage = styled(Image)`
  width: 80px;
  height: 80px;
  margin: 10px;
`

const StyledForm = styled(Form)`
    margin: 20px;
`

export default ItemForm;