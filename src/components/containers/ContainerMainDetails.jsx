import React from 'react';
import MainFocusText from "../shared/Text/MainFocusText";
import styled from "styled-components";
import {Image} from "react-bootstrap";
import ParagraphText from "../shared/Text/ParagraphText";

const ContainerMainDetails = ({container, logo}) => {
    return (
        <MainDetailsContainer>
            <ImageContainer>
                <StyledImage
                    src={logo}
                    alt=""
                    className="img-responsive rounded-circle"
                />
            </ImageContainer>
            <TextDetailsContainer>
                <ItemName>
                    <MainFocusText>
                        {container.name}
                    </MainFocusText>
                </ItemName>
                <ItemType>
                {container.description ?
                    container.description : "---"}
                    </ItemType>
            </TextDetailsContainer>
        </MainDetailsContainer>
    );
};

const MainDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 7px;

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`

const TextDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`
const ImageContainer = styled.div`
  display: flex;
  align-items: center;
`
const StyledImage = styled(Image)`
  width: 30px;
  height: 30px;
`
const ItemName = styled.div`
  position: relative;
  top: 3px;
`
const ItemType = styled.div`
  color: var(--text-muted);
  font-family: 'EB Garamond', serif;
  font-weight: 600;
  font-style: italic;
  font-size: 12px;
  padding-right: 20px;
  
  
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`

export default ContainerMainDetails;
