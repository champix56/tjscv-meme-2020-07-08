import React from 'react';
import logo from './logo.svg';
import './App.css';
import MemeFormEditor from './components/MemeFormEditor/MemeFormEditor';
import MemeSvgViewer from './components/MemeSvgViewer/MemeSvgViewer';

function App() {
  return (
    <div className="App">
      <MemeSvgViewer meme={{selectedImg:{url:'seigneur.jpg',id:0},texts:[{x:50,y:32,value:'devenir pro react',fontSize:10}],temporaryText:{x:50,y:75,value:'easy',fontSize:10}}}/>  
      <MemeFormEditor/>
    </div>
  );
}

export default App;
