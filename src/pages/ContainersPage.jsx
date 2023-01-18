import React, {useState} from 'react';
import {Container, Button, Dropdown} from "react-bootstrap";
import styled from "styled-components";
import ContainerForm from "../components/containers/ContainerForm";
import ContainersContainer from "../components/containers/ContianersContainer";
import ItemsContainerTable from "../components/containers/ItemsContainerTable";
import AddItemSearchBar from "../components/containers/AddItemSearchBar";
import PageContainer from "../components/shared/Container/PageContainer";
import SButton from "../components/shared/Button/SButton";
import {useDispatch, useSelector} from "react-redux";
import {showItemsInContainer} from "../slices/appSlice";


const ContainersPage = () => {

    const [createContainerModalShow, setCreateContainerModalShow] = useState(false);

    const [addItemInContainerModalShow, setAddItemInContainerModalShow] = useState({
        showModal: false,
        container: null
    });
    const { containerPage } = useSelector( (state) => state.app)
    const dispatch = useDispatch();

    const setShowItemsInContainer = (show, container) => {
        if(show){
            dispatch(showItemsInContainer({
                showItemsInContainer: true,
                currentContainerShowing: container
            }))
        }
        else{
            dispatch(showItemsInContainer({
                showItemsInContainer: false,
                currentContainerShowing: null
            }))
        }
    }

    const setAddItemInContainer = (show, container) => {
        console.log(show)
        console.log(container)
        if(show){
            setAddItemInContainerModalShow({
                showModal: true,
                container: container
            })
        }
        else{
            setAddItemInContainerModalShow({
                    showModal: false,
                    container: null,
                })
        }
        console.log('state', addItemInContainerModalShow.showModal)
    }
    
    return (
        <PageContainer>
            <Container className="my-5">
                <HeaderContainer>
                    <NavigationContainer>
                        { containerPage.showItemsInContainer && 
                            <SButton 
                                onClick={() => setShowItemsInContainer(false)}> 
                                {'<'}
                            </SButton>
                        }
                    </NavigationContainer>
                    <ActionsContainer>
                        { containerPage.showItemsInContainer &&  
                            <SButton 
                                onClick={() => setAddItemInContainer(true, containerPage.currentContainerShowing)} >
                                Add Item
                            </SButton>
                        }
                        { !containerPage.showItemsInContainer &&
                            <SButton
                                onClick={() => setCreateContainerModalShow(true)}>
                                Create
                            </SButton>
                        }
                    </ActionsContainer>
                </HeaderContainer>
                <ContentContainer>
                    { containerPage.showItemsInContainer ?
                        <ItemsContainerTable container={containerPage.currentContainerShowing}/> :
                        <ContainersContainer />
                    }
                </ContentContainer>
            </Container>
            <ContainerForm 
                show={createContainerModalShow} 
                onHide={() => setCreateContainerModalShow(false)}
            />
            { addItemInContainerModalShow &&  <AddItemSearchBar  
                show={addItemInContainerModalShow.showModal} 
                hide={() => setAddItemInContainer(false)} 
                container={addItemInContainerModalShow.container}
            />}
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

export default ContainersPage;
