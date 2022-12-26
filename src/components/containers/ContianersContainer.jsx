import React, {useEffect} from 'react';
import {Card, Spinner} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import styled from "styled-components";
import CardHeader from "react-bootstrap/CardHeader";
import ContainerCard from "./ContainerCard";
import {getAllContainers} from "../../slices/containersSlice";

const ContainersContainer = () => {
    const { containers, isLoading } = useSelector( (state) => state.containers)

    const dispatch = useDispatch();

    useEffect( () => {
        dispatch(getAllContainers())
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {

    }, [isLoading, dispatch])

    return (
        <Card>
            <SCardHeader>
                <h6 className="mb-0 fw-bold">Containers</h6>
            </SCardHeader>
            {isLoading ? <Spinner /> :
                <div className="row m-2">
                    { containers.map( (container, i) => <ContainerCard container={container} key={i}/>)
                    }
                </div>
            }
        </Card>
    );
};


const SCardHeader = styled(CardHeader)`
    background-color: var(--bg-2);
`

export default ContainersContainer;
