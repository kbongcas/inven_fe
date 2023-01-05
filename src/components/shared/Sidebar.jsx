import React from 'react';
import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logout, reset} from "../../slices/authSlice";

const SidebarNavButtons = [
    {
        title: "Home",
        path: "/",
        protected: false
    },
    {
        title: "Items",
        path: "/items",
        protected: true
    },
    {
        title: "Containers",
        path: "/containers",
        protected: true
    },
    {
        title: "Players",
        path: "/players",
        protected: true
    },
    {
        title: "Test",
        path: "/test",
        protected: false
    },
    {
        title: "Login",
        path: "/login",
        protected: false
    },
    {
        title: "Register",
        path: "/register",
        protected: false
    },
]



const Sidebar = () => {
    
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.auth)

    const handleLogout = () => {
        console.log('Logging out.')
        dispatch(logout())
        dispatch(reset())
    }

    const RenderSidebarNavButton = (sidebarNavButton, index, navigate) => {
        if(!sidebarNavButton.protected){
            return(
                <SidebarNavButton
                    key={index}
                    onClick={ () => navigate(sidebarNavButton.path) }
                >
                    <span>{sidebarNavButton.title}</span>
                </SidebarNavButton>
            )
        }
        else{
            return(
                user && <SidebarNavButton
                    key={index}
                    onClick={ () => navigate(sidebarNavButton.path) }
                >
                    <span>{sidebarNavButton.title}</span>
                </SidebarNavButton>
            )
        }
    }

    return (
        <SideBarContainer>
            <SidebarHeader>
                <SidebarHeaderSpan>Inven</SidebarHeaderSpan>
            </SidebarHeader>
            {SidebarNavButtons.map((button, index) =>  
                RenderSidebarNavButton(button, index, navigate))}
            <SidebarNavButton
                onClick={handleLogout}
            >
                <span>Log out</span>
            </SidebarNavButton>
        </SideBarContainer>
    );
}

const SideBarContainer = styled.div`
  min-width: 200px;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  background: var(--bg-2)
`
const SidebarNavButton = styled.button`
  color: inherit;
  background: transparent;
  height: 60px;
  font-family: inherit;
  border: 0;
  outline: 0;
  padding: 0;
  cursor: pointer;
`
const SidebarHeader = styled.span`
  height: 60px;
  border: 0;
  outline: 0;
  padding: 0;
  display: flex;
`
const SidebarHeaderSpan = styled.span`
  font-weight: 600;
  font-size: 23px;
  margin: auto;
`
export default Sidebar;