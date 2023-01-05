import React from 'react';
import Sidebar from "./Sidebar";
import styled from "styled-components";
import {Outlet} from "react-router-dom";


const Layout = ({hideSideNav}) => {
    return (
    <LayoutContainer>
        {!hideSideNav ? <Sidebar /> : {} }
        <ContentContainer>
            <Outlet />
        </ContentContainer>
    </LayoutContainer>
    );
}


const LayoutContainer = styled.div`
  min-height: 100vh;
  display: flex;
`

const ContentContainer = styled.div`
  flex-grow: 1;
  display: flex;
`

export default Layout;

