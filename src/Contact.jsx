import React, {useContext} from 'react';
import {Firstname, Lastname} from './Home';
const Contact = () =>{
    const fname = useContext(Firstname);
            const lname =useContext(Lastname);
    return (
        <div>
            
            <h1>my firstname is {fname, lname}</h1>
        </div>
    );
}

export default Contact;