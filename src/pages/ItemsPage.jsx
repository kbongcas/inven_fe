import React, {useState} from 'react';
import {Button, Container, Dropdown} from "react-bootstrap";
import styled from "styled-components";
import ItemForm from "../components/items/ItemForm";
import ItemsTable from "../components/items/ItemsTable";

const ItemsPage = () => {
    
    const [addItemModalShow, setAddItemModalShow] = useState(false);
    
    return(
        <ItemsPageContainer>
            <Container className="my-5">
                <ActionsContainer>
                    <Button variant="primary" onClick={() => setAddItemModalShow(true)}>Create Item</Button>
                    <StyledDropdown>
                        <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
                            Container
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Tommie's Bag</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Erkan's Bag</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Anthony's Bag</Dropdown.Item>
                            <Dropdown.Item href="#/action-1">Eric's Bag</Dropdown.Item>
                        </Dropdown.Menu>
                    </StyledDropdown>
                </ActionsContainer>
                <ContentContainer>
                    <ItemsTable />
                </ContentContainer>
            </Container>
            <ItemForm show={addItemModalShow} onHide={() => setAddItemModalShow(false)}/>
        </ItemsPageContainer> 
    )
}

const StyledDropdown = styled(Dropdown)`
    margin-right: 5px;
`
const ContentContainer = styled.div`
  overflow: hidden;
  border-radius: 10px;
`

const ActionsContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin-bottom: 10px;
`


const ItemsPageContainer = styled.div`
  background-color: var(--bg-1);
  width: 100%;
`

export default ItemsPage;
