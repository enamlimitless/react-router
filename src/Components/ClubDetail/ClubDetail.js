import React, { useEffect, useState } from 'react';
import './ClubDetail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFlag,faFootballBall,faRing,faSearchLocation} from '@fortawesome/free-solid-svg-icons';
import banner from '../../Photo/banner.jpg';
import team from '../../Photo/Rectangle 28.png';
import facebook from '../../Icon/Facebook.png';
import twitter from '../../Icon/Twitter.png';
import youtube from '../../Icon/YouTube.png';
import { useParams } from 'react-router';

const ClubDetail = () => {
    const [club, setClub] = useState([]);

    const {idLeague} = useParams();

    const {strFanart2, strBadge, dateFirstEvent, strLeague, strCountry, strGender, strSport, strDescriptionEN, strDescriptionFR,strFacebook, strTwitter, strYoutube} = club || {};

    useEffect(() =>{
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`)
        .then(res => res.json())
        .then(data => setClub(data.leagues[0]))
        console.log('Hello',club)
    },[idLeague])


    return (
        <div className="fluid">
            <header className="header">
                <img src={banner} alt=""/>
            <div className="badge">
                <img src={strBadge} alt=""/>
            </div>
            </header>
            <div className="main-content">
               <div className="club-detail">
               <div className="container detail">
                    <div className="row">
                        <div className="col-lg-8">
                             <h1><FontAwesomeIcon icon={faFlag} /> {strLeague}</h1>
                             <h5><FontAwesomeIcon icon={faSearchLocation} /> {dateFirstEvent}</h5>
                             <h5><FontAwesomeIcon icon={faFlag} /> {strCountry}</h5>
                             <h5><FontAwesomeIcon icon={faFootballBall} /> {strSport}</h5>
                             <h5><FontAwesomeIcon icon={faRing} /> {strGender}</h5>
                        </div>
                        <div className="col-lg-4">
                            <img className="img-fluid" src={team} alt=""/>
                        </div>
                    </div>
                </div>
               </div>
               <div className="container">
                   <div className="row">
                       <div className="col-lg-12">
                        <div className="description">
                            <p>{strDescriptionEN}</p>
                            <p>{strDescriptionFR}</p>
                        </div>
                       </div>
                   </div>
               </div>
               <footer>
                  <div className="container">
                  <div className="row">
                   <div className="social-links">
                    <a href={strFacebook} target="_blank"><img src={facebook} alt=""/></a>
                    <a href={strTwitter} target="_blank"><img src={twitter} alt=""/></a>
                    <a href={strYoutube} target="_blank"><img src={youtube} alt=""/></a>
                   </div>
                   </div>
                  </div>
               </footer>
            </div>
        </div>
    );
};

export default ClubDetail;