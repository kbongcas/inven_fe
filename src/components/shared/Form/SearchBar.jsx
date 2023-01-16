import React from 'react';
import {InputGroup, Form, ListGroup} from "react-bootstrap";
import {AiOutlineSearch} from "react-icons/ai";
import styled from "styled-components";

const SearchBar = () => {
    return (
        <SearchContainer>
            <SInputGroup>
                <SFormControl
                    type="text"
                />
                <TextInputGroup>
                    <AiOutlineSearch />
                </TextInputGroup>
            </SInputGroup>
            <SListGroup>
            </SListGroup>
        </SearchContainer>
    );
};

const TextInputGroup = styled(InputGroup.Text)`
  height: 30px;
  background-color: var(--bg-2);
  color: var(--bg-1);
  border-color: var(--bg-2);
`

const SInputGroup = styled(InputGroup)`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 250px;

`

const SFormControl = styled(Form.Control)`
  flex-direction: row;
  width: 100%;
  height: 30px;
  background-color: var(--bg-1);
  border-color: var(--bg-2);
  
  :focus {
    outline:none !important;
    outline-width: 0 !important;
    border-color: var(--bg-2);
    box-shadow: none;
    -moz-box-shadow: none;
    -webkit-box-shadow: none;
  }
`

const SearchContainer = styled.div`
`

const SListGroup = styled(ListGroup)`
  position: absolute;
  top: 55px;
  
`


export default SearchBar;
