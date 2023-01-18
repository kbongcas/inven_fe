import React from 'react';
import styled from "styled-components";
import SearchBar from "../Form/SearchBar";
import TableContainer from "../Container/TableContainer";
import STable from "../Table/STable";
import ModalContainer from "./ModalContainer";

const SearchModal = ({show, onHide, renderPrompt,  searchInput, searchPlaceholder, handleFilter, children}) => {

    return  (
        <ModalContainer
            show={show}
            onHide={onHide}
        >
            <SContainer>
                {renderPrompt()}
                <SearchBar
                    type="text"
                    searchInput={searchInput}
                    searchPlaceholder={searchPlaceholder}
                    handleFilter={handleFilter}
                    autoFocus
                />
                {children && 
                    <SListGroup>
                        <TableContainer>
                            <STable>
                                <tbody>
                                {children}
                                </tbody>
                            </STable>
                        </TableContainer>
                    </SListGroup>
                }
            </SContainer>
        </ModalContainer>
    )
};

const SContainer = styled.div`
  background-color: var(--bg-1);
  display: flex;
  flex-direction: column;
  align-items: center;
`


const SListGroup = styled.div`
  position: absolute;
  top: 100px;

  border-width: 5px;
  border-color: #0F151A;
  
  width: 300px;

`

export default SearchModal;