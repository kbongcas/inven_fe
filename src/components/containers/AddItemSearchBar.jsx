import React, {useEffect, useState} from 'react';
import {
    Button,
    Form,
    InputGroup,
    ListGroup,
    Image,
    Modal, ModalHeader
} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {getAllItems} from "../../slices/itemsSlice";
import styled from "styled-components";
import {getImageFromItem} from "../../data/testdata";
import {AiOutlineSearch} from "react-icons/ai";
import {addItemIntoContainer} from "../../slices/itemsInContainerSlice";

const AddItemSearchBar = ({show, hide, container}) => {

    const {items} = useSelector(state => state.items);
    const [filteredItems, setFilteredItems] = useState([])
    const [showFilteredDropdown, setShowFilteredDropdown] = useState(false)
    const [searchInput, setSearchInput] = useState("")

    const dispatch = useDispatch();

    useEffect( () => {
        if(show) {
            dispatch(getAllItems())
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [show])
    
    const performFilter = (input) => {
        const filteredData = input === "" ? 
            [] : 
            items.filter( item => item.name.toLowerCase().includes(input.toLowerCase()));
        setSearchInput(input)
        setFilteredItems(filteredData);
        setShowFilteredDropdown(filteredData.length > 0)
    }
    
    const handleFilter = e => {
        performFilter(e.target.value)
    }

    const handleFilteredItemClicked= (itemId, containerId) => {
        dispatch(addItemIntoContainer({
            itemId,
            containerId
        }))
        setSearchInput("")
        setShowFilteredDropdown( false)
        hide()
    }

    const FilteredItemRow = ({item}) =>
    {
        const logo = getImageFromItem(item)
        
        return(
            <SButton
                className="list-group-item list-group-item-action"
                onClick={() => handleFilteredItemClicked(item.id, container.id)}
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
                        <ItemName className="fw-bold mb-auto">{item.name}</ItemName>
                        <ItemType className="text-muted mb-auto">{item.type}</ItemType>
                    </div>
                </div>
            </SButton>
        )
    }
    
    return container && (
        <SModal
            centered
            show={show}
            onHide={hide}
        >
            <ModalHeader>
                {container.name}
            </ModalHeader>
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
                        &&  filteredItems.map( (item, i) => <FilteredItemRow item={item} key={i}/>
                        )
                    }
                </SListGroup>
    </SearchContainer>
</SModal>
)

};

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


export default AddItemSearchBar;
