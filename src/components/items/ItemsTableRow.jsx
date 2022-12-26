import {getImageFromItem} from "../../data/testdata";
import styled from "styled-components";
import {Image} from "react-bootstrap";
import {BiEdit, BiTrash} from "react-icons/bi";
import {deleteItem} from "../../slices/itemsSlice";
import {useDispatch} from "react-redux";
import ItemForm from "./ItemForm";
import {useState} from "react";

const ItemsTableRow = ({item, setViewItemModalShow, setSelectedItem}) => {

    const logo = getImageFromItem(item)
    const [updateItemModalShow, setUpdateItemModalShow] = useState(false);

    const dispatch = useDispatch();
    
    const handleDeleteItem = () => {
        dispatch(deleteItem(item.id))
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
                </td>
            </tr>
            <ItemForm show={updateItemModalShow} onHide={() => setUpdateItemModalShow(false)} item={item}/>
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

export default ItemsTableRow;
