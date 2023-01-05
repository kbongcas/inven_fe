import React, {useEffect, useState} from 'react';
import {Spinner, Table} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import styled from "styled-components";
import ItemsTableRow from "../items/ItemsTableRow";
import ViewItem from "../items/ViewItem";
import {getAllItemsInContainer} from "../../slices/itemsInContainerSlice";
import ItemsContainerTableRow from "./ItemsContainerTableRow";

const ItemsContainerTable = ({container}) => {
    const [viewItemModalShow, setViewItemModalShow] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const { itemsInContainer, isLoading } = useSelector( (state) => state.itemsInContainer)

    const dispatch = useDispatch();

    useEffect( () => {
        dispatch(getAllItemsInContainer(container.id))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {

    }, [isLoading, dispatch, container])

    return (
        <Table className="align-middle mb-0 bg-white">
            <TableHeader>
                <tr>
                    <th>Name</th>
                    <th>Cost</th>
                    <th>Weight</th>
                    <th>Notes</th>
                    <th></th>
                </tr>
            </TableHeader>
            <tbody>
            { isLoading ? <tr><td><Spinner /></td></tr>:
                (itemsInContainer.map((item, i) => <ItemsContainerTableRow
                    container={container}
                    item={item}
                    key={i}
                    setViewItemModalShow={setViewItemModalShow}
                    setSelectedItem={setSelectedItem}
                />))
            }
            </tbody>
            <ViewItem show={viewItemModalShow} onHide={() => setViewItemModalShow(false)} item={selectedItem}/>
        </Table>
    );
};


const TableHeader = styled.thead`
    background-color: var(--bg-2);
`

export default ItemsContainerTable;