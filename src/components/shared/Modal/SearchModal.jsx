import React from 'react';
import {Modal, ModalHeader, ModalBody, ModalFooter, InputGroup, ListGroup, Image, Button, Form} from "react-bootstrap";
import styled from "styled-components";
import {AiOutlineSearch} from "react-icons/ai";

const SearchModal = ({show, onHide, renderPrompt,  searchInput, searchPlaceholder, handleFilter, children}) => {

    return  (
        <SModal
            centered
            show={show}
            onHide={onHide}
        >
            <ModalHeader>
            </ModalHeader>
            <SModalBody>
                {renderPrompt()}
                <SearchContainer>
                    <SInputGroup>
                        <SFormControl
                            type="text"
                            value={searchInput}
                            placeholder={searchPlaceholder}
                            onChange={handleFilter}
                            autoFocus
                        />
                        <InputGroup.Text>
                            <AiOutlineSearch />
                        </InputGroup.Text>
                    </SInputGroup>
                    <SListGroup>
                        {children}
                    </SListGroup>
                </SearchContainer>
            </SModalBody>
            <SModalFooter>
            </SModalFooter>
        </SModal>
    )
};


const SInputGroup = styled(InputGroup)`
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 400px;
`

const SFormControl = styled(Form.Control)`
  flex-direction: row;
  width: 100%;
`

const SModal = styled(Modal)`
  overflow: hidden;
  white-space: nowrap;
`
const SModalBody = styled(ModalBody)`
  background-color: var(--bg-1);
  display: flex;
  flex-direction: column;
  align-items: center;
`

const SModalFooter = styled(ModalFooter)`
  background-color: var(--bg-1);
  border: 0;
`

const SearchContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
`

const SListGroup = styled(ListGroup)`
  position: absolute;
  top: 55px;
`

export default SearchModal;