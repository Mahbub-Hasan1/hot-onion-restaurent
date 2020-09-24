import React from 'react';
import noMatch from './404.png'

const NoMatch = () => {
    return (
        <div>
            <img style={{width:'80%',margin:'0 auto'}} src={noMatch} alt=""/>
        </div>
    );
};

export default NoMatch;