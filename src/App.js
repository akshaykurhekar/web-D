import React, { useState } from 'react';

import './App.css';
import Background from './component/Background/Background';
import InputElement from './component/InputElement/InputElement';

function App() {

    const [title, setTitle] = useState('welcome');
    const [zoom, setZoom] = useState(20);

  return (
  <div className='flex'>
      <div style={ {width:'750px', textAlign:'center', marginTop:'3rem' } } >
        <InputElement title={title} zoom={zoom} setTitle={setTitle} setZoom={setZoom} />
      </div>
    <div>
    <Background title={title} fontSize={zoom} />
        </div>   
  </div>
   );
}

export default App;
