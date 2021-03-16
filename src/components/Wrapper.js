import React from 'react';
// import { Container } from 'react-bootstrap';

function Wrapper(props) {
    return(
        <div className='container fluid'>{props.children}</div>
    )
}

export default Wrapper;