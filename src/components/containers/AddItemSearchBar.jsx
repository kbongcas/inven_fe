import React, {useEffect, useState} from 'react';
import {
    Button,
    Image,
} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {getAllItems} from "../../slices/itemsSlice";
import styled from "styled-components";
import {getImageFromItem} from "../../data/testdata";
import {addItemIntoContainer} from "../../slices/itemsInContainerSlice";
import SearchModal from "../shared/Modal/SearchModal";
import ModalSearchResult from "../shared/Form/SearchResult";
import {searchFilter} from "../../utils/searchFilter";

const AddItemSearchBar = ({show, hide, container}) => {

    const {items} = useSelector(state => state.items);
    const [filteredItems, setFilteredItems] = useState([])
    const [showFilteredDropdown, setShowFilteredDropdown] = useState(false)
    const [searchInput, setSearchInput] = useState("")

    const dispatch = useDispatch();

    useEffect( () => {
        if(show) {
            setSearchInput("")
            setFilteredItems([])
            dispatch(getAllItems())
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [show])
    
    const performFilter = (input) => {
        const filteredData = searchFilter.performFilter(input, items, "name")
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

    const renderPrompt = () => {
        return (
            <div className="d-flex flex-row">
                <p>Add item to &nbsp;</p><p className="fw-bold">{container.name}</p>
            </div>
        )
    }

    const FilteredItemRow = ({item}) =>
    {
        const logo = getImageFromItem(item)
        
        return(
            <ModalSearchResult
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
            </ModalSearchResult>
        )
    }
    
    return container && (

        <SearchModal
            show={show}
            onHide={hide}
            renderPrompt={renderPrompt}
            searchInput={searchInput}
            searchPlaceholder="Search Item to add"
            handleFilter={handleFilter}
        >
                    { showFilteredDropdown
                        &&  filteredItems.map( (item, i) => <FilteredItemRow item={item} key={i}/>
                        )
                    }
        </SearchModal>
)

};


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
