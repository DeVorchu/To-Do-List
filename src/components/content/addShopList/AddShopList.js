import './AddShopList.scss';
import {useState} from 'react';


function AddShopList(props) {
    const data = props.list !== null? props.list : <></>;
    const [newShopList, setNewShopList] = useState({
        id: 0,
        userId: 1,
        taskId: null,
        title: "testowy z lapy",
        items: "",
        task: null,
        user: null
    });

    const submit = e => {
        e.preventDefault();
        props.onShopList(newShopList)
        console.log(newShopList)
    }

  return (
    <div className="shop-list-container">
        <form onSubmit={submit}>
            <input className="shop-list-input" type="text" value={newShopList.items} onChange={e => setNewShopList({...newShopList, items: e.target.value})}/>
            <button className='btn btn-done'>Dodaj liste</button>
        </form>
    </div>
  );
}

export default AddShopList;
