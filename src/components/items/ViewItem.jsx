import styled from "styled-components";
import {getImageFromItem} from "../../data/testdata";
import {Container, Image, Modal, ModalDialog, ModalHeader} from "react-bootstrap";
import bg from '../../assets/journal.webp';

const ViewItem = ({show, onHide, item}) => {

    const logo = getImageFromItem(item)
    
    return (
        <SModal
            show={show}
            onHide={onHide}
            size="lg"
        >
            <SModalDialog>
                <BackgroundContainer>
            {item && (<ViewDetailsContainer>
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
            </ViewDetailsContainer> )}
                    </BackgroundContainer>
            </SModalDialog>
        </SModal>
    );
};

const SModal = styled(Modal)`
  .modal-content {
    width: 694px;
    height: 917px;
    background: rgba(0,0,0,0);
    border: 0
  }
`

const BackgroundContainer = styled.div`
  background-image: url(${bg});
  background-size: cover;
  width: 100%;
  height: 100%;
`

const SModalDialog = styled(ModalDialog)`
  margin: auto;


`

const ViewDetailsContainer = styled(Container)`
  font-family: 'Kurale', serif;
  padding: 24px 60px 60px 60px;
  width: 100%;
  height: 100%;
  
  
  h2 {
    position: relative;
    color:#5d180d;
    border-bottom: none;
    font-family: 'Kurale', serif;

    text-shadow: 2px 0 0 var(--border-color),
    -2px 0 0 var(--border-color),
    0 2px 0 var(--border-color),
      0 -2px 0 var(--border-color),
    1px 1px var(--border-color),
      -1px -1px 0 var(--border-color),
      1px -1px 0 var(--border-color),
    -1px 1px 0 var(--border-color);
  }
  
  p {
    position: relative;
    font-family: 'EB Garamond', serif;
    font-size: 16px;
    font-weight: 600;
  }
`


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
