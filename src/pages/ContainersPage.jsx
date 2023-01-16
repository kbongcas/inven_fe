import React, {useState} from 'react';
import {Container, Button, Dropdown} from "react-bootstrap";
import styled from "styled-components";
import ContainerForm from "../components/containers/ContainerForm";
import ContainersContainer from "../components/containers/ContianersContainer";
import ItemsContainerTable from "../components/containers/ItemsContainerTable";
import AddItemSearchBar from "../components/containers/AddItemSearchBar";
import MoveItemSearchBar from "../components/containers/MoveItemSearchBar";
import PageContainer from "../components/shared/Container/PageContainer";
import SButton from "../components/shared/Button/SButton";



const ContainersPage = () => {

    const [createContainerModalShow, setCreateContainerModalShow] = useState(false);
    const [addItemInContainerModalShow, setAddItemInContainerModalShow ] = useState(false);
    const [showItemsInContainer, setShowItemsInContainer] = useState(false);
    const [selectedContainer, setSelectedContainer] = useState(null);

    return (
        <PageContainer>
            <Container className="my-5">
                <HeaderContainer>
                    <NavigationContainer>
                        { showItemsInContainer && 
                            <SButton 
                                onClick={() => setShowItemsInContainer(false)}> 
                                {'<'}
                            </SButton>
                        }
                    </NavigationContainer>
                    <ActionsContainer>
                        { showItemsInContainer &&  
                            <SButton 
                                onClick={() => setAddItemInContainerModalShow(true)} >
                                Add Item
                            </SButton>
                        }
                        { !showItemsInContainer &&
                            <SButton
                                onClick={() => setCreateContainerModalShow(true)}>
                                Create
                            </SButton>
                        }
                    </ActionsContainer>
                </HeaderContainer>
                <ContentContainer>
                    { showItemsInContainer ?
                        <ItemsContainerTable container={selectedContainer}/> :
                        <ContainersContainer setShowItemsInContainer={setShowItemsInContainer} setSelectedContainer={setSelectedContainer}/>
                    }
                </ContentContainer>
            </Container>
            <ContainerForm 
                show={createContainerModalShow} 
                onHide={() => setCreateContainerModalShow(false)}
            />
            <AddItemSearchBar  
                show={addItemInContainerModalShow} 
                hide={() => setAddItemInContainerModalShow(false)} 
                container={selectedContainer}
            />
        </PageContainer>
    );
};

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-bottom: 10px;
`

const ActionsContainer = styled.div`
  display: flex;
  margin-left: auto;
  gap: 10px;
`
const NavigationContainer = styled.div`
    margin-right: auto;
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
