import './ArchTask.scss';
import {Link} from 'react-router-dom';
import Bin from '../../assets/images/bin.svg';

function ArchTask(props) {
  return (
    <div className="arch-task-container">
      
        <div className="info-container">
          <span>{props.title} - {props.date} ID - {props.id}</span>
          <div className='bin-btn' onClick={() => props.onArchTaskDelete(props.id)}>
            <img src={Bin} color="white" />
          </div>
          
        </div>
      
    </div>
  );
}

export default ArchTask;
