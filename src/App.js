import React from 'react';
import './App.css';
import MemeFormEditor from './components/MemeFormEditor/MemeFormEditor';
import MemeSvgViewer from './components/MemeSvgViewer/MemeSvgViewer';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import MemeNavbar from './components/MemeNavbar/MemeNavbar';
import store from './reducer';
function App() {
  return (
    <>
    <Banner></Banner>
      
      <div className="App">
      <MemeNavbar/>
        <MemeSvgViewer store={store} meme={{ selectedImg: { url: 'trololo.jpg', id: 0 }, texts: [{ x: 50, y: 32, value: 'devenir pro react', fontSize: 10 }], temporaryText: { x: 50, y: 75, value: 'easy', fontSize: 12 } }}></MemeSvgViewer>
        <MemeFormEditor  store={store} />
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
