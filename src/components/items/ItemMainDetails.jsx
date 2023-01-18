import React from 'react';
import MainFocusText from "../shared/Text/MainFocusText";
import styled from "styled-components";
import {Image} from "react-bootstrap";

const ItemMainDetails = ({item, logo}) => {
    return (
    <MainDetailsContainer>
        <ImageContainer>
            <StyledImage
                src={logo}
                alt=""
                className="img-responsive rounded-circle"
            />
        </ImageContainer>
        <div>
            <ItemName>
                <MainFocusText>
                    {item.name}
                </MainFocusText>
            </ItemName>
            <ItemType>{item.type ? item.type : "---"}</ItemType>
        </div>
    </MainDetailsContainer>
    );
};

const MainDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 7px;
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
const ItemType = styled.p`
  color: var(--text-muted);
  font-family: 'EB Garamond', serif;
  font-weight: 600;
  font-style: italic;
  font-size: 12px;
  
  position: relative;
  bottom: 2px;
  margin: 0;
  padding: 0;
`

export default ItemMainDetails;
