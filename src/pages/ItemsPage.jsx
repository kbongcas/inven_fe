import React, {useState} from 'react';
import {Button, Container, Dropdown} from "react-bootstrap";
import styled from "styled-components";
import ItemForm from "../components/items/ItemForm";
import ItemsTable from "../components/items/ItemsTable";
import SearchBar from "../components/shared/Form/SearchBar";
import PageContainer from "../components/shared/Container/PageContainer";
import SButton from "../components/shared/Button/SButton";

const ItemsPage = () => {
    
    const [addItemModalShow, setAddItemModalShow] = useState(false);
    
    return(
        <PageContainer>
            <Container className="my-5">
                <HeaderContainer>
                    <HeaderSectionContainer>
                        <SButton
                            className="btn-sm"
                            onClick={() => setAddItemModalShow(true)}>
                            New Item
                        </SButton>
                    </HeaderSectionContainer>
                    <HeaderSectionContainer>
                        <SearchBar />
                    </HeaderSectionContainer>
                    <HeaderSectionContainer>
                        {"Total Items: 100"}
                    </HeaderSectionContainer>
                </HeaderContainer>
                <ContentContainer>
                    <ItemsTable />
                </ContentContainer>
            </Container>
            <ItemForm show={addItemModalShow} onHide={() => setAddItemModalShow(false)} item={null}/>
        </PageContainer> 
    )
}

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin-bottom: 10px;
  gap: 15px;
  height: 50px;
`

const HeaderSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const ContentContainer = styled.div`
`

export default ItemsPage;
