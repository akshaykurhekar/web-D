import React from 'react';

import './inputElement.css';

const InputElement = ({ title,zoom, setTitle, setZoom }) =>{

    return (
        <div>
            <input  style={{ margin:'20px' }} name="range" type="range" min={20} max={70} value={ zoom } onChange={ (e) => setZoom(e.target.value) } />

            <input style={{ margin:'20px', fontSize:'22px' }} value={ title } onChange={ (e) => setTitle(e.target.value) }  type="text" />
        </div>
    );
}

export default InputElement