import React, {useEffect, useState} from 'react';
import {Spinner, Table} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import styled from "styled-components";
import ViewItem from "./ViewItem";
import {getAllItems} from "../../slices/itemsSlice";
import ItemsTableRow from "./ItemsTableRow";

const ItemsTable = () => {
    const [viewItemModalShow, setViewItemModalShow] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const { items, isLoading } = useSelector( (state) => state.items)

    const dispatch = useDispatch();

    useEffect( () => {
        dispatch(getAllItems())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {

    }, [isLoading, dispatch])
    
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
                (items.map((item, i) => <ItemsTableRow 
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

export default ItemsTable;
