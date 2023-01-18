import React from 'react';
import styled from "styled-components";

const TableContainer = ({children}) => {
    return (
        <Container>
            {children}
        </Container>
    );
};

const Container = styled.div`
  margin: 0 0 5px;
  background: var(--bg-1);
  padding: 20px;
  max-height: 800px;
  overflow-y: auto;
`
export default TableContainer;
