import React, { useEffect, useState } from 'react';
import Club from '../Club/Club';
import './Leagues.css';
import banner from '../../Photo/banner.jpg';

const Leagues = () => {
    const [leagues, setLeagues] = useState([]);
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/all_leagues.php`;
        fetch(url)
        .then(res => res.json())
        .then(data => setLeagues(data.leagues.slice(0, 9)))
        // console.log(leagues[0].strLeague)
    },[])
    return (
        <div className="home-style">
            <header className="header">
                <img src={banner} alt=""/>
                <div className="league-title">
                    <h1>Fantacy Football</h1>
                </div>
            </header>
            {/* <h1>Hello Leagues : {leagues.length}</h1> */}
            <div className="league-style">
            {
                leagues.map(league => <Club league={league}></Club>)
            }
            </div>          
        </div>
    );
};

export default Leagues;