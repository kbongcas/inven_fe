import React from 'react';
import styled from "styled-components";

const SearchResult = ({onClick, children}) => {
    return (
        <TableRow
            onClick={onClick}
        >
            {children}
        </TableRow>
    );
};

const TableRow = styled.tr`
  width: 400px;
  height: 60px;
  padding: 0;
  margin: 0;
`

export default SearchResult;
