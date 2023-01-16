import React, {useEffect, useState} from 'react';
import {Card, Container, Spinner, Table} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import styled from "styled-components";
import ViewItem from "./ViewItem";
import {getAllItems} from "../../slices/itemsSlice";
import ItemsTableRow from "./ItemsTableRow";
import CardHeader from "react-bootstrap/CardHeader";
import CardContainer from "../shared/Container/CardContainer";

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
        <CardContainer
            name="Items"
        >
            <SContainer>
                <STable>
                    <STableBody>
                        { isLoading ? <tr><td><Spinner /></td></tr>:
                            (items.map((item, i) => <ItemsTableRow
                                item={item}
                                key={i}
                                setViewItemModalShow={setViewItemModalShow}
                                setSelectedItem={setSelectedItem}
                            />))
                        }
                    </STableBody>
                    <ViewItem show={viewItemModalShow} onHide={() => setViewItemModalShow(false)} item={selectedItem}/>
                </STable>
            </SContainer>
        </CardContainer>
    );
};

const SContainer = styled.div`
  margin: 0 0 5px;
  background: var(--bg-1);
  padding: 20px;
  max-height: 800px;
  overflow-y: scroll;
`

const STable = styled(Table)`
  width: 100%;
  table-layout: fixed;
  border-collapse: collapse;
  border-spacing: 1px 10rem;

  td {
    padding: 5px;
    text-align: left;
  }
  
  tr {
    border-bottom: 1px solid black;
  }

  tr:nth-child(2n) {
    background-color: var(--bg-1-1)
  }
`


const STableBody = styled.tbody`
`

export default ItemsTable;
