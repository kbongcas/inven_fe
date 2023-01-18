import React, {useEffect, useState} from 'react';
import {Spinner, Table} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import ViewItem from "./ViewItem";
import {getAllItems} from "../../slices/itemsSlice";
import ItemsTableRow from "./ItemsTableRow";
import CardContainer from "../shared/Container/CardContainer";
import TableContainer from "../shared/Container/TableContainer";
import STable from "../shared/Table/STable";
import ItemForm from "./ItemForm";

const ItemsTable = () => {
    const [ viewItemModalShow, setViewItemModalShow] = useState({
        showModal: false,
        item: null
    });
    
    const [updateItemModalShow, setUpdateItemModalShow] = useState({
        showModal: false,
        item: null
    });
    
    const { items, isLoading } = useSelector( (state) => state.items)

    const dispatch = useDispatch();

    useEffect( () => {
        dispatch(getAllItems())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {

    }, [isLoading, dispatch])

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
        console.log(item)
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

    return (
        <CardContainer
            name="Items"
        >
            <TableContainer>
                <STable>
                    <tbody>
                    { isLoading ? <tr><td><Spinner /></td></tr>:
                        (items.map((item, i) =>
                            <ItemsTableRow
                                item={item}
                                key={i}
                                setViewItem={setViewItem}
                                setUpdateItem={setUpdateItem}
                            >
                            </ItemsTableRow>
                        ))
                    }
                    </tbody>
                </STable>
            </TableContainer>
            {updateItemModalShow.showModal &&  <ItemForm show={updateItemModalShow.showModal} onHide={() => setUpdateItem(false)} item={updateItemModalShow.item}/>}
            {viewItemModalShow.showModal && <ViewItem show={viewItemModalShow.showModal} onHide={() => setViewItem(false)} item={viewItemModalShow.item}/>}
        </CardContainer>
    );
};


export default ItemsTable;
