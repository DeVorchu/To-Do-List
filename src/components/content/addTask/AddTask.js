import { useState } from 'react';
import './AddTask.scss';




function AddTask(props) {

    const [newTask, setnewTask] = useState({
        UserId : 1,
	    ShopListId : 1,
	    Title : "Task z Frontu",
	    Date: "2015-05-16T05:50:06",
	    Information: "INFO",
        IsRemainderSelected: false,
        ReminderTime: "2015-05-16T05:50:06",
        ReminderDate: "2015-05-16T05:50:06",
        IsShopListAdded: false,
        IsArch: false
    });

    const submit = e => {
        e.preventDefault();
        console.log(newTask)
        props.onTaskAdd(newTask)
    }

    const reminderChecboxHandler = e => {
        if(e.target.checked){
            setnewTask({...newTask, IsRemainderSelected: true})
        } else {
            setnewTask({...newTask, IsRemainderSelected: false})
        }
    }

  return (

    

    <form onSubmit={submit}>
        <input type="text" name="title" placeholder="TEMAT..." 
        value={newTask.Title} 
        onChange={e => setnewTask({...newTask, Title: e.target.value})}/>

        <input type="text" name="data" placeholder="data... (dd/mm/rrrr)" value={newTask.Date} onChange={e => setnewTask({...newTask, Date: e.target.value})}/>
        <input type="text" name="notes" placeholder="Notka.." value={newTask.Information} onChange={e => setnewTask({...newTask, Information: e.target.value})}/>  
        <input type="text" name="reminder" placeholder="Godzina przypomnienia..." value={newTask.ReminderTime} onChange={e => setnewTask({...newTask, ReminderTime: e.target.value})}/>    
        <div className="checkbox-label-container">
            <div style={{width: '15%'}}>
            <label className="checkbox-label" name="reminder" > PRZYPOMNIENIE </label>
            </div>
            <div style={{width: '30%', padding: '5px'}}>
            <input type="checkbox" name="isReminded" value='' onChange={reminderChecboxHandler}/>
            </div>
        </div>
        <div className='btn-holder' style={{width: '100%'}}>
            <button className="btn btn-save" >Zapisz</button> 
        </div>                
    </form>

  );
}

export default AddTask;


