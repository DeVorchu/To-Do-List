import './InputField.scss';

function InputField(props) {
  return (
    <div className="input-field-container">
        <div className="displayer-box">   
        <div>
          <input className="td-input" type={props.type} placeholder={props.placeholder}/>
        </div> 
        <div>
          
        </div>    
          
          
        </div>
    </div>
  );
}

export default InputField;
