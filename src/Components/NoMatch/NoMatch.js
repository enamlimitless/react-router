import React from 'react';
import './NoMatch.css';

const NoMatch = () => {
    return (
        <div className="nomatch">
            <h1>Nothing Found</h1>
            <h2>4 &#11093; 4 Error</h2>
            <a className="btn btn-danger" href="">Back To Home</a>
        </div>
    );
};

export default NoMatch;