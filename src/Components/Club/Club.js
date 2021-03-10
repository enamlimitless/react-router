import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight} from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router';


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
        <div>
            <h2 className="card-title">{strLeague}</h2>
            <p className="card-description">Sports Type: {strSport}</p>
            <button onClick={() => showDetail(idLeague)} className="btn btn-primary">Explore <FontAwesomeIcon icon={faArrowRight} /></button>
        </div>
    );
};

export default Club;