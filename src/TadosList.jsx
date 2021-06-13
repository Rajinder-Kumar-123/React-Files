import React,{useState} from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import ListCom from './ListCom';
import './HomePage.css';
const TadosList = () =>{
    const [item, setItem] = useState("");
    const [newItem, setNewItem] = useState([]);

    const itemEvent = (event) =>{
        setItem(event.target.value);

    }
    const listOfItems = () =>{
        setNewItem((preValue)=>{
            return[...preValue,item];
        });
        setItem(" ");
    }
    return(
        <div>
            <div className="main_div">
                <div className="center_div">
                    <br/>
                    <h1>Todo List</h1>
                    <br/>
                    <input type="text" value={item} placeholder="Ads on items" onChange={itemEvent}/>
                    <button className="newBtn" onClick={listOfItems}>
                    <AddIcon/>
                    </button>
                        <br/>
                        <ol>
                            {newItem.map((val,index)=>{
                                return <ListCom key={index} text={val}/>;
                            })}
                        </ol>
                </div>
            </div>
        </div>
    );
}
export default TadosList;