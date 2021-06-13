import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
const Note = (props) =>{
    return(
        <div>
            <h1>{props.title}</h1>
            <br/>
            <p>{props.content}</p>
            <button>
            <DeleteIcon/> 
            </button>
        </div>
    )

}
export default Note;