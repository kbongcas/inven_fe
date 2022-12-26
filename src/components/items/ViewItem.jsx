import styled from "styled-components";
import {getImageFromItem} from "../../data/testdata";
import {Container, Image, Modal, ModalFooter, ModalHeader} from "react-bootstrap";

const ViewItem = ({show, onHide, item}) => {

    const logo = getImageFromItem(item)
    
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
        >
            <StyledModalHeader>
                <h3 className="mb-0 fw-bold flex-grow-1">View Item</h3>
            </StyledModalHeader>
            {item && (<Container>
                <div className="row mt-3">
                    <div className="col-4">
                        <StyledImageContainer>
                            <StyledImage
                                src={logo}
                                alt=""
                                className="img-responsive rounded-circle"
                            />
                        </StyledImageContainer>
                        <AttributeContainer>
                            <p className="mb-0">Weight:&nbsp;</p>
                            <p className="mb-0 fw-bold">{item.weight}</p>
                        </AttributeContainer>
                        <AttributeContainer>
                            <p className="mb-0">Cost:&nbsp;</p>
                            <p className="mb-0 fw-bold">{item.cost}</p>
                        </AttributeContainer>
                    </div>
                    <div className="col">
                        <AttributeContainer>
                            <h2 className="mb-0 ">{item.name}</h2>
                        </AttributeContainer>
                        <AttributeContainer>
                            <h5 className="text-muted">{item.type}</h5>
                        </AttributeContainer>
                        <AttributeContainer>
                            <p className="mb-auto">{item.notes}</p>
                        </AttributeContainer>
                    </div>
                </div>
                <div className="row mt-3 mb-3">
                    <div className="col">
                        <AttributeContainer>
                            <p className="mb-auto">{item.description}</p>
                        </AttributeContainer>
                    </div>
                </div>
            </Container> )}
        </Modal>
    );
};

const AttributeContainer = styled.div`
    display: flex;
`

const StyledImageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const StyledImage = styled(Image)`
  width: 80px;
  height: 80px;
  margin: 10px;
`

const StyledModalHeader = styled(ModalHeader)`
  background-color: var(--bg-2);
`

export default ViewItem;
