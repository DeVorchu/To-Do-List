import './ShopListsBox.scss';


function ShopListsBox(props) {

    const data = props.list !== null? props.list : <></>;

  return (
    <div className="list-container">
        <ul>
            <li>{data.items}</li> 
            <li></li> 
            <li>fake</li> 
            <li>fake</li>     
        </ul>
    </div>
  );
}

export default ShopListsBox;
