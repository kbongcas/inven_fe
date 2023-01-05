import React, {useState} from 'react';
import styled from "styled-components";
import {BiEdit, BiTrash} from "react-icons/bi";
import {getImageFromItem} from "../../data/testdata";
import {Card, Image} from "react-bootstrap";
import CardHeader from "react-bootstrap/CardHeader";
import {useDispatch} from "react-redux";
import {deleteContainer} from "../../slices/containersSlice";
import ContainerForm from "./ContainerForm";

const ContainerCard = ({container, setShowItemsInContainer, setSelectedContainer}) => {
    const logo = getImageFromItem('default')
    const [updateContainerModalShow, setUpdateContainerModalShow] = useState(false);

    const dispatch = useDispatch();
    
    const handleDeleteItem = () => {
        dispatch(deleteContainer(container.id))
    }

    const handleViewContainer = () => {
        setSelectedContainer(container);
        setShowItemsInContainer(true);
    }
    
    return(
        <div className="col-md-4 p-3">
            <SCard
                onDoubleClick={handleViewContainer}
            >
                <SCardHeader>
                    <h6 className="mb-0 fw-bold">{container.name}</h6>
                </SCardHeader>
                <div className="card-body overflow-hidden">
                    <div className="d-flex flex-row mb-2">
                        <StyledImage
                            src={logo}
                            alt=""
                            className="img-responsive rounded-circle"
                        />
                        <div>
                            <div className="flex-grow-0">{container.name}</div>
                            <div className="flex-grow-0 text-black-50">{container.creator}</div>
                        </div>
                    </div>
                    <div className="d-flex flex-column">
                        <div className="flex-grow-1 overflow-auto">{container.description}</div>
                    </div>
                </div>
                <SCardFooter className="card-footer">
                    <div className="flex-grow-0 d-flex justify-content-between">
                        <span></span>
                        <span>
                            <BiEdit className="text-muted" onClick={ ()=> setUpdateContainerModalShow(true) }/>
                            <BiTrash className="text-muted" onClick={handleDeleteItem}/>
                        </span>
                    </div>
                </SCardFooter>
            </SCard>
            <ContainerForm show={updateContainerModalShow} onHide={() => setUpdateContainerModalShow(false)} container={container}/>
        </div>
    )
};

const SCard = styled(Card)`
    height: 250px;
`


const SCardHeader = styled(CardHeader)`
  overflow: hidden;
  background-color: var(--bg-2);
`

const SCardFooter = styled(Card)`
  background-color: transparent;
  border: 0;
`

const StyledImage = styled(Image)`
  width: 50px;
  height: 50px;
  margin-right: 20px;
`


export default ContainerCard;
