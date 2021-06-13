import React,{useState} from 'react';
import AddIcon from '@material-ui/icons/Add';
    const [data, setState]= useState(null);
    const[name, printState]= useState(false);

        function addEvent(e){
            console.log(e.target.value);
            //setState(e.target.value);
        }
    return(
        <div>
        {data}
            <form>
                <input type="text" name="title" value="" name="title" onChange={addEvent} placeholder="Title" /><br/><br/>
                {/* <textarea row="" colomun="" name="content" value="" onChange={addEvent} type="text" placeholder="Type a node" /><br/><br/> */}
                <button onClick={setPrint(true)}>
                <AddIcon/>
                </button>
            </form>
        </div>

    );

export default Form;