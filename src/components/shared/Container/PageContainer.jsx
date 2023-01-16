import React from 'react';
import styled from "styled-components";

const PageContainer = ({children}) => {
    return (
        <SPageContainer>
            {children}
        </SPageContainer>
    );
};

const SPageContainer = styled.div`
  background-color: var(--bg-3);
  overflow: auto;
  flex-grow: 1;
  height: 100vh;
`

export default PageContainer;
