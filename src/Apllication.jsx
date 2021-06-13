import React,{useState} from 'react';
import Form from './Form';
import Note from './Note';

const Apllication =() =>{
    const [items, addItems] = useState([])
    const addNote = (note) =>{
        addItems((prevData)=>{
            return[
                ...prevData,note
            ];
        })
        alert("clicked");
    }
    return(
        <div>
            <Form passNote={addNote}/>
            {items.map((val, index)=>{
                return <Note
                id={index}
                key={index}
                title={val.title}
                content={val.content}

                />
            })}
            
        </div>
    )

}
export default Apllication;