import React, {useState} from 'react';
import {Container, Button} from "react-bootstrap";
import styled from "styled-components";
import ContainerForm from "../components/containers/ContainerForm";
import ContainersContainer from "../components/containers/ContianersContainer";



const ContainersPage = () => {

    const [createContainerModalShow, setCreateContainerModalShow] = useState(false);

    return (

        <ContainerPageContainer>
            <Container className="my-5">
                <ActionsContainer>
                    <Button variant="primary" onClick={() => setCreateContainerModalShow(true)} >Create Container</Button>
                </ActionsContainer>
                <ContentContainer>
                    <ContainersContainer />
                </ContentContainer>
            </Container>
            <ContainerForm show={createContainerModalShow} onHide={() => setCreateContainerModalShow(false)}/>
        </ContainerPageContainer>
    );
};

const ActionsContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin-bottom: 10px;
`

const ContentContainer = styled.div`
  overflow: hidden;
  border-radius: 10px;
`

const ContainerPageContainer = styled.div`
  background-color: var(--bg-1);
  width: 100%;
`

export default ContainersPage;
