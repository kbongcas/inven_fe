import React, {useEffect, useState} from 'react';
import {Spinner} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import ViewItem from "../items/ViewItem";
import {getAllItemsInContainer} from "../../slices/itemsInContainerSlice";
import ItemsContainerTableRow from "./ItemsContainerTableRow";
import CardContainer from "../shared/Container/CardContainer";
import TableContainer from "../shared/Container/TableContainer";
import STable from "../shared/Table/STable";
import ItemForm from "../items/ItemForm";
import MoveItemSearchBar from "./MoveItemSearchBar";

const ItemsContainerTable = ({container}) => {
    
    const [viewItemModalShow, setViewItemModalShow] = useState({
        showModal: false,
        item: null
    });

    const [updateItemModalShow, setUpdateItemModalShow] = useState({
        showModal: false,
        item: null
    });
    
    const [moveItemModalShow, setMoveItemModalShow] = useState({
        showModal: false,
        item: null
    });
    
    const { itemsInContainer, isLoading } = useSelector( (state) => state.itemsInContainer)

    const dispatch = useDispatch();

    useEffect( () => {
        dispatch(getAllItemsInContainer(container.id))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {

    }, [isLoading, dispatch, container])

    const setViewItem = (show, item) => {
        if(show){
            setViewItemModalShow({
                showModal: true,
                item: item
            })
        }
        else{
            setViewItemModalShow({
                showModal: false,
                item: null
            })
        }
    }

    const setUpdateItem = (show, item) => {
        if(show){
            setUpdateItemModalShow({
                showModal: true,
                item: item
            })
        }
        else{
            setUpdateItemModalShow({
                showModal: false,
                item: null
            })
        }
    }

    const setMoveItem = (show, item) => {
        if(show){
            setMoveItemModalShow({
                showModal: true,
                item: item
            })
        }
        else{
            setMoveItemModalShow({
                showModal: false,
                item: null
            })
        }
    }

    return (
        <CardContainer
            name={`Items in ${container.name}`}
        >
            <TableContainer>
                <STable>
                    <tbody>
                    { isLoading ? <tr><td><Spinner /></td></tr>:
                        (itemsInContainer.map((item, i) => <ItemsContainerTableRow
                            container={container}
                            item={item}
                            key={i}
                            setViewItem={setViewItem}
                            setUpdateItem={setUpdateItem}
                            setMoveItem={setMoveItem}
                        />))
                    }
                    </tbody>
                </STable>
            </TableContainer>
            {updateItemModalShow.showModal &&  <ItemForm show={updateItemModalShow.showModal} onHide={() => setUpdateItem(false)} item={updateItemModalShow.item}/>}
            {viewItemModalShow.showModal && <ViewItem show={viewItemModalShow.showModal} onHide={() => setViewItem(false)} item={viewItemModalShow.item}/>}
            {moveItemModalShow.showModal && <MoveItemSearchBar show={moveItemModalShow.showModal} hide={() => setMoveItem(false)}  item={moveItemModalShow.item}/>}
        </CardContainer>
    );
};

export default ItemsContainerTable;