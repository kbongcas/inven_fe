import React from 'react';
import styled from "styled-components";

const Header = () => {
    return (
        <SHeader>
           This is the Header 
        </SHeader>
    );
};
 
const SHeader = styled.div`
    background-color: #212930;
  color: var(--bg-1);
`

export default Header;
