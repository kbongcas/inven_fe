import React, {useEffect, useState} from 'react';
import {
    Image,
} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import styled from "styled-components";
import {moveItemInContainer} from "../../slices/itemsInContainerSlice";
import {getAllContainers} from "../../slices/containersSlice";
import SearchModal from "../shared/Modal/SearchModal";
import {searchFilter} from "../../utils/searchFilter";
import ModalSearchResult from "../shared/Modal/ModalSearchResult";

const MoveItemSearchBar = ({show, hide, item}) => {

    const {containers} = useSelector(state => state.containers);
    const [filteredContainers, setFilteredContainers] = useState([])
    const [showFilteredDropdown, setShowFilteredDropdown] = useState(false)
    const [searchInput, setSearchInput] = useState("")

    const dispatch = useDispatch();
    
    useEffect( () => {
        if(show) {
            setSearchInput("")
            setFilteredContainers([])
            dispatch(getAllContainers())
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [show])

    const performFilter = (input) => {
        const filteredData = searchFilter.performFilterWithIgnore(input, containers, "name", "id", item.containerId)
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

    const renderPrompt = () => {
        return (
            <div className="d-flex flex-row">
                <p>Moving&nbsp;</p><p className="fw-bold">{item.name}</p><p>&nbsp; into...</p>
            </div>
        )
    }

    const FilteredContainerRow = ({container}) =>
    {
        const logo = ImageData.default;

        return(
            <ModalSearchResult
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
            </ModalSearchResult>
        )
    }


    return item && (
        <SearchModal
            show={show}
            onHide={hide}
            renderPrompt={renderPrompt}
            searchInput={searchInput}
            searchPlaceholder="Search Container"
            handleFilter={handleFilter}
        >
            { showFilteredDropdown
                &&  filteredContainers.map( (container, i) => <FilteredContainerRow container={container} key={i}/>
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


export default MoveItemSearchBar;