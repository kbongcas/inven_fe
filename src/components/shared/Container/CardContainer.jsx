import React from 'react';
import styled from "styled-components";
import {Card} from "react-bootstrap";
import CardHeader from "react-bootstrap/CardHeader";

const CardContainer = ({children, name}) => {
    return (

        <SCard>
            <SCardHeader>
                <h6 className="mb-0 fw-bold">{name}</h6>
            </SCardHeader>
            {children}
        </SCard>
    );
};

const SCard = styled(Card)`
  background: var(--bg-1);
`

const SCardHeader = styled(CardHeader)`
  background-color: var(--bg-2);
  color: var(--bg-1);
`
export default CardContainer;
