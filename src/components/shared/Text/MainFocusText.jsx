import React from 'react';
import styled from "styled-components";

const MainFocusText = ({children, fontSize}) => {
    return (
        <Text fontSize={fontSize}>
            {children}
        </Text>
    );
};

const Text = styled.p`
  color: var(--text-header);
  font-family: 'Kurale', serif;
  font-weight: 600;
  font-size: ${props => props.fontSize ?? '14px' };
`

export default MainFocusText;
