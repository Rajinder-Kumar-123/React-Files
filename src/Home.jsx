
import React,{createContext} from 'react';
//import Contact from './Contact';
const Home = () =>{
    const Firstname = createContext();
    const Lastname = createContext();
    return(
        <div>
            <Firstname.provider value={"Rajan"}>

           
                <Lastname.provider value={"Bhoria"}></Lastname.provider>
                </Firstname.provider>
            
        </div>
    );
}
export default Home;
export {Firstname, Lastname};

