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
import bg from '../../assets/paperTexture.webp';

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
            <FormContainer>
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
                            <div className="form-group row">
                                <InputLabel className="col-sm-2 form-label" for="weight">Weight:</InputLabel>
                                <div className="col-sm-10">
                                    <InputField
                                        type="text"
                                        className="form-control"
                                        name="weight"
                                        id="weight"
                                        value={itemData.weight}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                            <div className="form-group row">
                                <InputLabel className="col-sm-2 form-label" for="cost">Cost:</InputLabel>
                                <div className="col-sm-10">
                                    <InputField
                                        type="text"
                                        className="form-control"
                                        name="cost"
                                        id="cost"
                                        value={itemData.cost}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>

                            <div className="form-group row">
                                <InputLabel className="col-sm-2 form-label">Count:</InputLabel>
                                <div className="col-sm-10">
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
                        </div>
                        <FormGroup className="col d-flex flex-column">
                            <InputLabel>Name</InputLabel>
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
                            <InputLabel>Type</InputLabel>
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
                            <InputLabel>Notes</InputLabel>
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
            </FormContainer>
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


const FormContainer = styled.div`
  background-image: url(${bg});
  background-size: contain;
`


const InputLabel = styled.label`
  display: block;
  margin-top: 6px;
  font-size: 15px;
  font-family: 'EB Garamond', serif;
  font-weight: 600;
  text-align: right;
`
const InputField = styled.input`
  font-size: 15px;
  background-color: transparent;
  font-family: 'EB Garamond', serif;
  font-weight: 600;
  border: 0;
  
  :focus {
    outline:none !important;
    outline-width: 0 !important;
    box-shadow: none;
    -moz-box-shadow: none;
    -webkit-box-shadow: none;
    background-color: transparent;
  }
  
  
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