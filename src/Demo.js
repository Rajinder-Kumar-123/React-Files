import React, {Component} from 'react';
//import ReactDOM from 'react-dom';
import './Demo.css';
import 'tachyons';
import AvatarList from './AvatarList';
import {NavLink} from 'react-router-dom';
import {Route, Switch} from 'react-router-dom';
import About from './About';
const Demo = () =>{
    const AvatarListArray =[
        {
            id: 1,
            name: 'Rajan',
            work: 'Web developer'
        },
        {
            id: 2,
            name: 'Anjali',
            work: 'Computer Operator'
        },
        {
            id: 3,
            name: 'Rahul',
            work: 'Free no Job'
        },
        {
            id: 4,
            name: 'Annu',
            work: 'Fresher Accountant'
        },
        {
            id: 5,
            name: 'Partap',
            work: 'Fresher Accountant'
        },
        {
            id: 6,
            name: 'Kirti',
            work: 'Fresher Accountant'
        },
        {
            id: 7,
            name: 'Chalu',
            work: 'Fresher Accountant'
        },
        {
            id: 8,
            name: 'pagal',
            work: 'Fresher Accountant'
        }

    ];
    const AvatarCard = AvatarListArray.map( (AvatarCardArray, i) => {
        return <AvatarList id={AvatarListArray[i].name} 
        name={AvatarListArray[i].name} 
        work={AvatarListArray[i].work} />
    });
    return <div className="mainpage">
    <h1 className="">Welcome to my site</h1>
    <div className="Menu pd5 bc-white">
    <NavLink to="/About">About</NavLink>
    <NavLink to="/Contact">Contact Us</NavLink>
    <NavLink to="/Service">Service</NavLink>
    <NavLink to="/Gellery">Gellery</NavLink>
    </div>
        <Switch>
            <Route exact path="/" Component={Demo}/>
            <Route  path="/about" Component={About}/>
        </Switch>
        {AvatarCard}  
        </div>
}

export default Demo;