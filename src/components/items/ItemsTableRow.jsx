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
            <STableRow
                onDoubleClick={() => {
                    setSelectedItem(item)
                    setViewItemModalShow(true);
                    
                }}
            >
                <MainDetailsTableCell>
                    <MainDetailsContainer>
                        <ImageContainer>
                            <StyledImage
                                src={logo}
                                alt=""
                                className="img-responsive rounded-circle"
                            />
                        </ImageContainer>
                        <div>
                            <ItemName>{item.name}</ItemName>
                            <ItemType>{item.type ? item.type : "---"}</ItemType>
                        </div>
                    </MainDetailsContainer>
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
                    <Notes>
                        {item.notes ? item.notes : "---" }
                    </Notes>
                </NotesTableCell>
                <ActionsTableCell>
                    <Actions>
                        <BiEdit className="text-muted" onClick={() => setUpdateItemModalShow(true)}/>
                        <BiTrash className="text-muted" onClick={handleDeleteItem}/>
                    </Actions>
                </ActionsTableCell>
            </STableRow>
            <ItemForm show={updateItemModalShow} onHide={() => setUpdateItemModalShow(false)} item={item}/>
        </>
    )
}


const STableRow = styled.tr`
`

const MainDetailsTableCell = styled.td`
  vertical-align: middle;
  position: relative;
  width: 325px;
`
const MainDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 7px;
`
const ImageContainer = styled.div`
  display: flex;
  align-items: center;
`
const StyledImage = styled(Image)`
  width: 30px;
  height: 30px;
`
const ItemName = styled.p`
  color: var(--text-header);
  font-family: 'Kurale', serif;
  font-weight: 600;
  font-size: 14px;

  margin: 0;
  padding: 0;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  line-clamp: 1;
  -webkit-box-orient: vertical;
  
  position: relative;
  top: 3px;
`
const ItemType = styled.p`
  color: var(--text-muted);
  font-family: 'EB Garamond', serif;
  font-weight: 600;
  font-style: italic;
  font-size: 12px;
  
  position: relative;
  bottom: 2px;
  margin: 0;
  padding: 0;
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
const Notes = styled.p`
  color: var(--text-main);
  font-family: 'EB Garamond', serif;
  font-weight: 600;
  font-size: 13px;
  align-items: center;
  margin-bottom: 0;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
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
