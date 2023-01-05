import React, {useState} from 'react';
import {Container, Button, Dropdown} from "react-bootstrap";
import styled from "styled-components";
import ContainerForm from "../components/containers/ContainerForm";
import ContainersContainer from "../components/containers/ContianersContainer";
import ItemsContainerTable from "../components/containers/ItemsContainerTable";
import AddItemSearchBar from "../components/containers/AddItemSearchBar";
import MoveItemSearchBar from "../components/containers/MoveItemSearchBar";



const ContainersPage = () => {

    const [createContainerModalShow, setCreateContainerModalShow] = useState(false);
    const [addItemInContainerModalShow, setAddItemInContainerModalShow ] = useState(false);
    const [showItemsInContainer, setShowItemsInContainer] = useState(false);
    const [selectedContainer, setSelectedContainer] = useState(null);

    return (
        <ContainerPageContainer>
            <Container className="my-5">
                <HeaderContainer>
                    <NavigationContainer>
                        { showItemsInContainer && 
                            <Button 
                                variant="primary" 
                                onClick={() => setShowItemsInContainer(false)}> 
                                {'<'}
                            </Button>
                        }
                    </NavigationContainer>
                    <ActionsContainer>
                        { showItemsInContainer &&  
                            <Button 
                                variant="primary" 
                                onClick={() => setAddItemInContainerModalShow(true)} >
                                Add Item
                            </Button>
                        }
                        { !showItemsInContainer &&
                            <Button
                                variant="primary"
                                onClick={() => setCreateContainerModalShow(true)}>
                                Create Container
                            </Button>
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
        </ContainerPageContainer>
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

const TitleContainer = styled.div`
`

const NavigationContainer = styled.div`
    margin-right: auto;
`

const SearchBarContainer = styled.div`
    margin-left: auto;
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
