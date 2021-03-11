import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight} from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router';
import './Club.css';

const Club = (props) => {
    // console.log(props.league)
     const {strLeague,strSport,idLeague} = props.league || {};
    const history = useHistory()
    const showDetail = idLeague =>{
        const url = `club/${idLeague}`;
        history.push(url);
    }
// console.log(props.league.idLeague)
    return (
        <div className="club-style">
            <h3 className="card-title">{strLeague}</h3>
            <h5 className="card-description">Sports Type: {strSport}</h5>
            <button onClick={() => showDetail(idLeague)} className="btn btn-primary">Explore <FontAwesomeIcon icon={faArrowRight} /></button>
        </div>
    );
};

export default Club;