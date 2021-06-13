import React, { useEffect, useState } from 'react';
import 'tachyons';
import './index.css';

const LiveCovidTracker= () =>{
    const [data, setState] = useState([]);
    const getCovidData = async()=>{
        try{
            const res= await fetch('https://api.covid19india.org/data.json');
            const data= await res.json();
            setState(data.statewise[0]);
                console.log(data.statewise[0]);
        }catch(err){
            console.log(err);
        }
           
    }
    useEffect(()=>{
            getCovidData();
    }, []);
        return(

            <div>
           
            <section>
                <h1>Live</h1>
                <h1>Covid-19 Coronavirus Tracker</h1>
               
                <ul>
                    <li className="card">
                        <div className="card_main">
                            <div className="card_inner">
                                <p className="card_name"><span>OUR</span>COUNTRY</p>
                                <p className="card_total card_small">INDIA</p>
                            </div>
                        </div>

                    </li>
                    <li className="card">
                        <div className="card_main">
                            <div className="card_inner">
                                <p className="card_name"><span>TOTAL</span>RECOVERED</p>
                                <p className="card_total card_small">{data.recovered}</p>
                            </div>
                        </div>

                    </li>
                    <li className="card">
                        <div className="card_main">
                            <div className="card_inner">
                                <p className="card_name"><span>TOTAL</span>CONFIRMED</p>
                                <p className="card_total card_small">{data.confirmed}</p>
                            </div>
                        </div>

                    </li>
                    <li className="card">
                        <div className="card_main">
                            <div className="card_inner">
                                <p className="card_name"><span>TOTAL</span>DEATHS</p>
                                <p className="card_total card_small">{data.deaths}</p>
                            </div>
                        </div>

                    </li>
                    <li className="card">
                        <div className="card_main">
                            <div className="card_inner">
                                <p className="card_name"><span>TOTAL</span>ACTIVE</p>
                                <p className="card_total card_small">{data.active}</p>
                            </div>
                        </div>

                    </li>

                    <li className="card">
                        <div className="card_main">
                            <div className="card_inner">
                                <p className="card_name"><span>LAST</span>UPDATED</p>
                                <p className="card_total card_small">{data.lastupdatedtime}</p>
                            </div>
                        </div>

                    </li>


                </ul>
                </section>
            </div>

            

        );
}
export default LiveCovidTracker;
