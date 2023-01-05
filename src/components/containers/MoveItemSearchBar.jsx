import React, {useEffect, useState} from 'react';
import {
    Button,
    Form,
    InputGroup,
    ListGroup,
    Image,
    Modal, ModalHeader, ModalBody
} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import styled from "styled-components";
import {AiOutlineSearch} from "react-icons/ai";
import {addItemIntoContainer, moveItemInContainer} from "../../slices/itemsInContainerSlice";
import {getAllContainers} from "../../slices/containersSlice";

const MoveItemSearchBar = ({show, hide, item}) => {

    const {containers} = useSelector(state => state.containers);
    const [filteredContainers, setFilteredContainers] = useState([])
    const [showFilteredDropdown, setShowFilteredDropdown] = useState(false)
    const [searchInput, setSearchInput] = useState("")

    const dispatch = useDispatch();
    
    useEffect( () => {
        if(show) {
            dispatch(getAllContainers())
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [show])

    const performFilter = (input) => {
        const filteredData = input === "" ?
            [] :
            containers.filter( container => container.name.toLowerCase().includes(input.toLowerCase())
                && container.id !== item.containerId
            );
        setSearchInput(input)
        setFilteredContainers(filteredData);
        setShowFilteredDropdown(filteredData.length > 0)
    }

    const handleFilter = e => {
        performFilter(e.target.value)
    }

    const handleFilteredContainersClicked= (containerId) => {
        dispatch(moveItemInContainer({
            item: item,
            newContainerId: containerId
        }))
        setSearchInput("")
        setShowFilteredDropdown( false)
        hide()
    }

    const FilteredContainerRow = ({container}) =>
    {
        const logo = ImageData.default;

        return(
            <SButton
                className="list-group-item list-group-item-action"
                onClick={() => handleFilteredContainersClicked(container.id)}
            >
                <div className="row">
                    <ImageContainer className="col-sm-1">
                        <StyledImage
                            src={logo}
                            alt=""
                            className="img-responsive rounded-circle"
                        />
                    </ImageContainer>
                    <div className="col-sm">
                        <ItemName className="fw-bold mb-auto">{container.name}</ItemName>
                        <ItemType className="text-muted mb-auto">{container.description}</ItemType>
                    </div>
                </div>
            </SButton>
        )
    }

    
    return item && (
        <SModal
            centered
            show={show}
            onHide={hide}
        >
            <ModalHeader>
            </ModalHeader>
            <SModalBody>
                <div className="d-flex flex-row">
                    <p>Moving&nbsp;</p><p className="fw-bold">{item.name}</p><p>&nbsp; into...</p>
                </div>
            <SearchContainer>
                <SInputGroup>
                    <SFormControl
                        type="text"
                        value={searchInput}
                        placeholder="Search for item to add"
                        onChange={handleFilter}
                        autoFocus
                    />
                    <InputGroup.Text>
                        <AiOutlineSearch />
                    </InputGroup.Text>
                </SInputGroup>
                <SListGroup>
                    { showFilteredDropdown
                        &&  filteredContainers.map( (container, i) => <FilteredContainerRow container={container} key={i}/>
                        )
                    }
                </SListGroup>
            </SearchContainer>
            </SModalBody>
        </SModal>
    )

};


const SModalBody = styled(ModalBody)`
  background-color: var(--bg-1);
  display: flex;
  flex-direction: column;
  align-items: center;
`
const SModal = styled(Modal)`
  overflow: hidden;
  white-space: nowrap;
`

const SInputGroup = styled(InputGroup)`
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 400px;
`

const SFormControl = styled(Form.Control)`
  flex-direction: row;
  width: 100%;
`

const SearchContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
`

const SListGroup = styled(ListGroup)`
  position: absolute;
  top: 55px;
`

const SButton = styled(Button)`
    width: 400px;
    height: 60px;
`

const StyledImage = styled(Image)`
  width: 30px;
  height: 30px;
  margin-top: 8px;
`
const ImageContainer = styled.div`
    margin-right: 10px;
`

const ItemType = styled.p`
  font-size: 15px;
  height: 50%;
`

const ItemName= styled.p`
  width: 300px;
  overflow: hidden;
  white-space: nowrap;
  word-break: break-word;
  text-overflow: ellipsis;
`


export default MoveItemSearchBar;