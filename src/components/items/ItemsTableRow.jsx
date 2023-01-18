import {getImageFromItem} from "../../data/testdata";
import styled from "styled-components";
import {BiEdit, BiTrash} from "react-icons/bi";
import {deleteItem} from "../../slices/itemsSlice";
import {useDispatch} from "react-redux";
import ParagraphText from "../shared/Text/ParagraphText.jsx";
import ItemMainDetails from "./ItemMainDetails";

const ItemsTableRow = ({item, setViewItem, setUpdateItem}) => {

    const logo = getImageFromItem(item)

    const dispatch = useDispatch();
    
    const handleDeleteItem = () => {
        dispatch(deleteItem(item.id))
    }

    return (
        <>
            <tr
                onDoubleClick={() => {
                    setViewItem(true, item);
                }}
            >
                <MainDetailsTableCell>
                    <ItemMainDetails item={item} logo={logo} />
                </MainDetailsTableCell>
                <SecondaryDetailsTableCell>
                    <Cost>
                        {item.cost ? item.cost: "---"}
                    </Cost>
                    <Weight>
                        {item.weight ? item.weight : "---"}
                    </Weight>
                </SecondaryDetailsTableCell>
                <NotesTableCell>
                    <ParagraphText lineLimit={2}>
                        {item.notes ? item.notes : "---" }
                    </ParagraphText>
                </NotesTableCell>
                <ActionsTableCell>
                    <Actions>
                        <BiEdit className="text-muted" onClick={() => setUpdateItem(true, item)}/>
                        <BiTrash className="text-muted" onClick={handleDeleteItem}/>
                    </Actions>
                </ActionsTableCell>
            </tr>
        </>
    )
}


const MainDetailsTableCell = styled.td`
  vertical-align: middle;
  position: relative;
  width: 325px;
`
const SecondaryDetailsTableCell = styled.td`
  vertical-align: middle;
  position: relative;
  width: 75px;
`
const Cost = styled.div`
  color: var(--text-main);
  font-family: 'EB Garamond', serif;
  font-weight: 600;
  font-size: 12px;
  
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-align: left;
`

const Weight = styled.div`
  font-family: 'EB Garamond', serif;
  font-weight: bold;
  color: var(--text-main);
  font-size: 12px;
  text-align: left;

  position: relative;
  bottom: 3px;
  margin: 0;
  padding: 0;
`
  
const NotesTableCell= styled.td`
  vertical-align: middle;
  width: 150px;
`

const ActionsTableCell= styled.td`
  width: 50px;
`

const Actions = styled.div`
  font-size: 15px;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  width: auto;
`
export default ItemsTableRow;
