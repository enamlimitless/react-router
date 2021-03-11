import React, { useEffect, useState } from 'react';
import './ClubDetail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faFlag,faFutbol,faMars} from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import banner from '../../Photo/banner.jpg';
import team from '../../Photo/Rectangle 28.png';
import { useParams } from 'react-router';

const ClubDetail = () => {
    const [club, setClub] = useState([]);

    const {idLeague} = useParams();

    const {strBadge, dateFirstEvent, strLeague, strCountry, strGender, strSport, strDescriptionEN, strDescriptionFR} = club || {};

    useEffect(() =>{
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`)
        .then(res => res.json())
        .then(data => setClub(data.leagues[0]))
        // console.log(idLeague,club)
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
                             <h1>{strLeague}</h1>
                             <h5><FontAwesomeIcon icon={faCalendar} /> {dateFirstEvent}</h5>
                             <h5><FontAwesomeIcon icon={faFlag} /> {strCountry}</h5>
                             <h5><FontAwesomeIcon icon={faFutbol} /> {strSport}</h5>
                             <h5><FontAwesomeIcon icon={faMars} /> {strGender}</h5>
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
                    <a href="https://facebook.com/"><FontAwesomeIcon icon={faFacebook} /></a>
                    <a href="https://twitter.com/"><FontAwesomeIcon icon={faTwitter} /></a>
                    <a href="https://youtube.com/"><FontAwesomeIcon icon={faYoutube} /></a>
                   </div>
                   <div className="author">
                       <p>Copyright © 2021 by <a href="https://facebook.com/enamaulhaquebrown">Enamul Haque Brown</a></p>
                   </div>
                   </div>
                  </div>
               </footer>
            </div>
        </div>
    );
};

export default ClubDetail;