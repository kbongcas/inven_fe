import React from 'react';
import styled from "styled-components";
import {Table} from "react-bootstrap";

const STable = ({children}) => {
    return (
        <TableStyled>
            {children} 
        </TableStyled>
    );
};

const TableStyled = styled(Table)`
  width: 100%;
  table-layout: fixed;
  border-collapse: collapse;
  border-spacing: 1px 10rem;

  td {
    padding: 5px;
    text-align: left;
  }
  
  tr {
    border-bottom: 1px solid black;
  }

  tr:nth-child(2n) {
    background-color: var(--bg-1-1)
  }
`

export default STable;
