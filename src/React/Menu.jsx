import React,{useState} from 'react';
import {NavLink} from 'react-router-dom';
import Search from './Search';

const Menu = () =>{
    const [img, setImg] =useState("");
    const inputEvent=(event)=>{
    const data = event.target.value;
    console.log(data);
    setImg(data);
    }
    return(
        <>
            <h1>First web page</h1>
            <NavLink  exact activeClassName="Active_class" to="/Home1">Home</NavLink>
            <NavLink activeClassName="Active_class" to="/About">About</NavLink>
            <NavLink activeClassName="Active_class" to="/Contact">Contact</NavLink><br/><br/>
            <input type="text" value={img} onChange={inputEvent} placeholder="Search" name={img}/>
            {img === "" ? null : <Search name={img}/> }
            
        </>
    );
}
export default Menu;