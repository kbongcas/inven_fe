import React from 'react';
import Sidebar from "./Sidebar";
import styled from "styled-components";
import {Outlet} from "react-router-dom";
import Header from "./Header";


const Layout = ({hideSideNav}) => {
    return (
    <LayoutContainer>
        <Header />
        <Main>
            {!hideSideNav ? <Sidebar /> : {} }
            <ContentContainer>
                <Outlet />
            </ContentContainer>
        </Main>
    </LayoutContainer>
    );
}

const Main = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: row;
  flex-grow: 4;
`

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

const ContentContainer = styled.div`
  flex-grow: 1;
`

export default Layout;

