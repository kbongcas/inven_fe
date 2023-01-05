import {getImageFromItem} from "../../data/testdata";
import styled from "styled-components";
import {Image} from "react-bootstrap";
import {BiEdit, BiTransfer, BiTrash} from "react-icons/bi";
import {useDispatch} from "react-redux";
import {useState} from "react";
import {deleteItemFromContainer} from "../../slices/itemsInContainerSlice";
import MoveItemSearchBar from "./MoveItemSearchBar";
import ItemInContainerForm from "./ItemInContainerForm";

const ItemsContainerTableRow = ({container, item, setViewItemModalShow, setSelectedItem}) => {

    const logo = getImageFromItem(item)
    const [updateItemModalShow, setUpdateItemModalShow] = useState(false);
    const [moveItemModalShow, setMoveItemModalShow] = useState(false);

    const dispatch = useDispatch();

    const handleDeleteItem = () => {
        dispatch(deleteItemFromContainer({
            itemId:  item.id,
            containerId: container.id
        }))
    }

    return (
        <>
            <tr
                onDoubleClick={() => {
                    setSelectedItem(item)
                    setViewItemModalShow(true);

                }}
            >
                <td>
                    <div className="d-flex align-items-center">
                        <StyledImage
                            src={logo}
                            alt=""
                            className="img-responsive rounded-circle"
                        />
                        <div className="ms-3">
                            <div className='d-flex'>
                                <p className="fw-bold mb-auto">{item.name}</p>
                                <ItemCount
                                    className="text-muted mb-auto">{item.count > 1 ? `x ${item.count}` : ''}</ItemCount>
                            </div>
                            <ItemType className="text-muted mb-auto">{item.type}</ItemType>
                        </div>
                    </div>
                </td>
                <td>
                    <p className="mb-0">{item.cost}</p>
                </td>
                <td>
                    <p className="mb-0">{item.weight}</p>
                </td>
                <td>
                    <p className="mb-0">{item.notes}</p>
                </td>
                <td>
                    <BiEdit className="text-muted" onClick={() => setUpdateItemModalShow(true)}/>
                    <BiTrash className="text-muted" onClick={handleDeleteItem}/>
                    <BiTransfer className="text-muted" onClick={() => setMoveItemModalShow(true)}/>
                </td>
            </tr>
            <MoveItemSearchBar
                show={moveItemModalShow}
                hide={() => setMoveItemModalShow(false)}
                item={item}
                container={container}
            />
            <ItemInContainerForm 
                show={updateItemModalShow} 
                onHide={() => setUpdateItemModalShow(false)}
                item={item}
            />
        </>
    )
}


const StyledImage = styled(Image)`
  width: 40px;
  height: 40px;
`

const ItemCount = styled.p`
  padding-left: 5px;
  font-size: 13px;
`
const ItemType = styled.p`
  font-size: 15px;
`

export default ItemsContainerTableRow;
