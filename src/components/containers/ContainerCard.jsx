import React, {useState} from 'react';
import styled from "styled-components";
import {BiEdit, BiTrash} from "react-icons/bi";
import {getImageFromItem} from "../../data/testdata";
import {Card, Image} from "react-bootstrap";
import CardHeader from "react-bootstrap/CardHeader";
import {useDispatch} from "react-redux";
import {deleteContainer} from "../../slices/containersSlice";
import ContainerForm from "./ContainerForm";
import MainFocusText from "../shared/Text/MainFocusText";
import ParagraphText from "../shared/Text/ParagraphText.jsx";
import {showItemsInContainer} from "../../slices/appSlice";

const ContainerCard = ({container}) => {
    const logo = getImageFromItem('default')
    const [updateContainerModalShow, setUpdateContainerModalShow] = useState(false);

    const dispatch = useDispatch();
    
    const handleDeleteItem = () => {
        dispatch(deleteContainer(container.id))
    }

    const handleViewContainerItems = () => {
        dispatch(showItemsInContainer({
            showItemsInContainer: true,
            currentContainerShowing: container
        }))
    }
    
    return(
        <div className="col-md-4 p-3">
            <SCard
                onDoubleClick={handleViewContainerItems}
            >
                <div className="card-body overflow-hidden">
                    <div className="d-flex flex-row mb-2">
                        <StyledImage
                            src={logo}
                            alt=""
                            className="img-responsive rounded-circle"
                        />
                        <div>
                            <div className="flex-grow-0">
                                <MainFocusText
                                    fontSize={'15px'}
                                >
                                    {container.name}
                                </MainFocusText>
                            </div>
                            <div className="flex-grow-0 text-black-50">
                                <ParagraphText
                                    fontSize={'14px'}
                                >
                                    {'Created by Kevin'}
                                </ParagraphText>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex flex-column">
                        <div className="flex-grow-1 overflow-auto">
                            <ParagraphText
                                fontSize={'14px'}
                                lineLimit={3}
                            >
                                {container.description}
                            </ParagraphText>
                        </div>
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
  height: 185px;
  background-color: var(--bg-1-1);
  border-width: 2px;
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
