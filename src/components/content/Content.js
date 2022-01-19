import './Content.scss';
import Task from './task/Task';
import ArchTask from '../archTask/ArchTask';
import React, {useState, useEffect, useRef} from 'react';
import { Route } from 'react-router-dom';
import AddTask from './addTask/AddTask';
import AxiosNew from '../../axios/axios';


function Content() {
    
    const taskpath = '/api/tasks';

    const [showArch, setShowArch] = useState(false);
    const [showAdd, setShowAdd] = useState(false);
    
    const [tasks, setTasks] = useState([]);
    const [archTasks, setArchTasks] = useState([]);

    const [shopLists, setShopList] = useState();
    

    const displayArchChange = () =>{ showArch ? setShowArch(false): setShowArch(true)}
    const displayAddChange = () =>{ showAdd ? setShowAdd(false) : setShowAdd(true)}

    const title = tasks.lenght > 0 ? <p>Oto twoja lista!</p> : <p>nie masz nic zaplanowanego!</p>

    const newTasks=[];
    const newArchTasks = [];

    const ShopListsStateHandler = async () => {
        var res = await AxiosNew.get('/api/shoplist')  
        
        var allList = res.data.data;
        console.log(allList)
        setShopList([...allList])
    }

    const ShopListHandler = async shopList => {
        var res = shopList.id > 0 ? await AxiosNew.post('/api/shoplist', {...shopList}) : await AxiosNew.put('/api/shoplist', {...shopList}); 
        var info = [ res.data.data, shopList.taskId]
        TaskShopListHandler(info)
    }

    const TaskShopListHandler = async (info) =>  {
        const filteredTasks = [...tasks].filter(x => x.id === info[1]);
        if(filteredTasks[0].isShopListAdded = true){
            filteredTasks[0].isShopListAdded = true;
            filteredTasks[0].ShopListId = info[0].id;
            var res = await AxiosNew.put('/api/tasks', {...filteredTasks[0]});
            newTasks.push(...tasks)
            setTasks(newTasks);
        }
        
        
    }
    
    const TaskStateHandler = async () => {
        var res = await AxiosNew.get('/api/tasks')  
        var allTasks = res.data.data;
        

        for (const key in allTasks){
            if (allTasks[key].isArch !== true){
                newTasks.push(allTasks[key])
                
            } else {
                newArchTasks.push(allTasks[key])
                
            }
        }
        setTasks(newTasks)
        setArchTasks(newArchTasks)
    }
    
    const TaskDeleteHandler = async (id) =>  {
        var res = await AxiosNew.delete(`/api/tasks/${id}`)
        var taskToDelete = [...tasks].filter(x => x.id === id)   
        taskToDelete === null ? taskToDelete = [...archTasks].filter(x => x.id !== id) : setTasks([...tasks].filter(x => x.id !==id))
        setArchTasks([...archTasks].filter(x => x.id !==id))
        
    }

    const TaskAddHandler = async (task) =>  {
        var res = await AxiosNew.post('/api/tasks', {...task})
        newTasks.push(...tasks, res.data.data) 
        setTasks(newTasks)
    }

    const TaskArchHandler = async (id) =>  {
        const filteredArchTask = [...tasks].filter(x => x.id === id);
        const filteredTasks = [...tasks].filter(x => x.id !== id);
        filteredArchTask[0].isArch = true;
        var res = await AxiosNew.put('/api/tasks', {...filteredArchTask[0]});
        setTasks([...filteredTasks])
        newArchTasks.push(...archTasks, filteredArchTask[0])
        setArchTasks(newArchTasks);
    }


    const containerRef = useRef();
    const { current } = containerRef;
    
    useEffect(() => {
        {ShopListsStateHandler()}
        {TaskStateHandler()}        
    },[current])

   

  return (
    
    

    <div className="content-container" ref={containerRef}>
    
       <div className="content-header">           
            <p>{title}</p>          
       </div>
       <div className='header-button-box'>           
           <button className="btn btn-arch" onClick={displayArchChange}>Archiwum</button>
           <button className="btn btn-add" onClick={displayAddChange}>Dodaj</button>
       </div>

       
       {showAdd ? (
           <div className="add-task-container" >
               <h1>Dodaj zadanie</h1>
                <AddTask onTaskAdd={task => TaskAddHandler(task)}/>
            </div>) : ( <></>
       )}
       
       {showArch ? (
        <div className="arch-container">  
            <div><h1>Archiwum</h1></div>          
            {archTasks.map(el => <ArchTask key={el.id} {...el} onArchTaskDelete ={id => TaskDeleteHandler(id)}/>)}
            
        </div>) : (
        <></>)}

        //         
        {tasks.map(el => <Task             
            key={el.id} {...el} 
            onTaskDelete={id => TaskDeleteHandler(id)} 
            onTaskArch={id => TaskArchHandler(id)}
            onShopList={shopList => ShopListHandler(shopList)}
            shopListPass = {shopLists}
            
        />)}
        


    <Route path='/arch'>
        
    </Route>

    
    </div>
  );
}




export default Content;
