import './Task.scss';
import ExMark from '../../../assets/images/exclamation.svg';
import ArMark from '../../../assets/images/arrow.svg';
import Bin from '../../../assets/images/bin.svg';
import Done from '../../../assets/images/done.svg';
import Edit from '../../../assets/images/edit.svg'
import SList from "../../../assets/images/list.svg"
import SListB from "../../../assets/images/listB.svg"
import React, {useState, useEffect} from 'react';
import Axios from '../../../axios/axios'
import AddShopList from '../addShopList/AddShopList';
import ShopListsBox from '../ShopListBox/ShopListBox';



function Task(props) {
    const [toolTip, setToolTip] = useState(false);
    const [noteBox, setNoteBox] = useState(false);
    const [shopFormShow, setShopForm] = useState(false);
    const [shopListShow, setShopList] = useState(false);

    // Icon state handlers //
    const toolTipClick = () => {setToolTip(!toolTip)}
    const displayChange = () =>{setNoteBox(!noteBox)}   
    const shopForm = () => {setShopForm(!shopFormShow)}
    const shopList = () => {setShopList(!shopListShow)}



    const targetList = props.shopListPass.findIndex(x => x.taskId === props.id);
    const passingListToProp = targetList >= 0 ? props.shopListPass[targetList] : null;
        
    

    



    // Task icon display //
    const info = props.isRemainderSelected ? <img src={ExMark}  onClick={toolTipClick} /> : <span></span> 
    const disply = props.information !== "INFO" ? <img src={ArMark}  onClick={displayChange} /> : <span></span>  
    const shopListIco = props.isShopListAdded ? <img src={SListB} onClick={shopList}/> : <span></span>  

    
    useEffect(() => {




    })
    
  return (
    <div className="task-container"> 
    {shopFormShow ? <AddShopList onShopList={props.onShopList} taskId={props.id} shopListId={props.information}/>: <></>}
    
        <div className="box-container">
            
            <div className='box'>
                
                <div className="task-title">
                    <span >{props.title} {info} ID {props.id}</span> 

                </div>

                <div className="task-date">
                    <span>{props.date}</span>
                    {toolTip ? <span className="tooltip-text">{props.reminderTime}</span> : <></>}
                    {shopListIco}
                    {disply}
                    
                </div>


            </div>
            <div className='box'>
                <div className="button-box">
                    <button className="btn btn-shop" onClick={shopForm}><img src={SList}/></button>
                    <button className="btn btn-delete" onClick={() => props.onTaskDelete(props.id)}><img src={Bin}/></button>
                    <button className="btn btn-edit" ><img src={Edit}/></button>                   
                    <button className="btn-done btn" onClick={() => props.onTaskArch(props.id)}><img src={Done}/></button>
                </div>

                <div className='reminder-box'>                    
                </div>
            </div>
        </div>
        {shopListShow ? <div> {passingListToProp === null? <></>: passingListToProp.items} </div> : <></>}
        {noteBox ? <div className="info-box" ><span>NOTA: {props.information}</span></div> : <></> }
        
    </div>
  );
}





export default React.memo(Task);

