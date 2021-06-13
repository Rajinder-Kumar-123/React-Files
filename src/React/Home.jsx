import React from 'react';
import Contact from './Contact';
import About from './About';
import Error from './Error';
import {Route, Switch} from 'react-router-dom';
import Menu from './Menu';
import Home1 from './Home1';


const Home =()=>{
    return(
        <>
            <Menu/>
            <Switch>
            <Route exact path="/" component={Home1}><h1>Hellow i am a Home page
            , Desktop Home........!</h1></Route>
           <Route  path="/Contact" component={Contact} />
            <About path="/About" component={About}/>
           <Route component={Error}/> 
            </Switch>
            
        </>
    )
}
export default Home;