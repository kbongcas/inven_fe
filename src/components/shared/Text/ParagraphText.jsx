import React from 'react';
import styled, {css} from "styled-components";

const ParagraphText = ({children, fontSize, lineLimit}) => {
    return (
        <Text 
            fontSize={fontSize}
            lineLimit={lineLimit}
        >
            {children}
        </Text>
    );
};

const Text = styled.p`
  color: var(--text-main);
  font-family: 'EB Garamond', serif;
  font-weight: 600;
  font-size: ${props => props.fontSize ?? '13px' };
  align-items: center;
  margin-bottom: 0;

  ${props => props.lineLimit && css`
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: ${props.lineLimit};
    line-clamp: ${props.lineLimit};
    -webkit-box-orient: vertical;
  `}
`

export default ParagraphText;
