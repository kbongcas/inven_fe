import React, {useEffect} from 'react';
import { Spinner} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import ContainerCard from "./ContainerCard";
import {getAllContainers} from "../../slices/containersSlice";
import CardContainer from "../shared/Container/CardContainer";

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
        <CardContainer name="Containers">
            {isLoading ? <Spinner /> :
                <div className="row m-2">
                    { containers.map( (container) => 
                        <ContainerCard 
                            container={container} 
                            key={container.id}
                        />)
                    }
                </div>
            }
        </CardContainer>
    );
};


export default ContainersContainer;
