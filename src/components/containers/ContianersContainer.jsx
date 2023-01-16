import React, {useEffect} from 'react';
import {Card, Spinner} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import styled from "styled-components";
import CardHeader from "react-bootstrap/CardHeader";
import ContainerCard from "./ContainerCard";
import {getAllContainers} from "../../slices/containersSlice";
import CardContainer from "../shared/Container/CardContainer";

const ContainersContainer = ({setShowItemsInContainer, setSelectedContainer}) => {
    const { containers, isLoading } = useSelector( (state) => state.containers)

    const dispatch = useDispatch();

    useEffect( () => {
        dispatch(getAllContainers())
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {

    }, [isLoading, dispatch])

    return (
        <CardContainer name="Containers">
            {isLoading ? <Spinner /> :
                <div className="row m-2">
                    { containers.map( (container, i) => 
                        <ContainerCard 
                            setShowItemsInContainer={setShowItemsInContainer} 
                            setSelectedContainer={setSelectedContainer}
                            setShowSe
                            container={container} 
                            key={i}
                        />)
                    }
                </div>
            }
        </CardContainer>
    );
};


const SCardHeader = styled(CardHeader)`
    background-color: var(--bg-2);
`

export default ContainersContainer;
