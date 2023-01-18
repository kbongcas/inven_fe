import React, {useEffect, useState} from 'react';
import {
    Container,
    Image, ModalFooter,
} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import styled, {css} from "styled-components";
import {moveItemInContainer} from "../../slices/itemsInContainerSlice";
import {getAllContainers} from "../../slices/containersSlice";
import SearchModal from "../shared/Modal/SearchModal";
import {searchFilter} from "../../utils/searchFilter";
import ModalSearchResult from "../shared/Form/SearchResult";
import TableContainer from "../shared/Container/TableContainer";
import ContainerMainDetails from "./ContainerMainDetails";

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

    const FilteredContainerRow = ({container, index} ) =>
    {
        const logo = ImageData.default;

        return(
            <ModalSearchResult
                onClick={() => handleFilteredContainersClicked(container.id)}
            >

                <SContainer
                    index={index}
                >
                    <ContainerMainDetails container={container} logo={logo} />
                </SContainer>
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
                &&  filteredContainers.map( (container, i) => <FilteredContainerRow container={container} index={i} key={i}/>
                )
            }
        </SearchModal>
    )
};

const SContainer = styled.div`
  display: flex; 
  flex-direction: row;
  
  border-width: 2px;
  margin: 0;

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  height: 100%;
`



export default MoveItemSearchBar;