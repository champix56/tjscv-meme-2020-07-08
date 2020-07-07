import React from 'react';
import './App.css';
import MemeFormEditor from '../MemeFormEditor/MemeFormEditor';
import MemeSvgViewer from '../MemeSvgViewer/MemeSvgViewer';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';

class App extends React.Component {
  constructor(props) { super(props); this.state = {}; }
  render() {
    return (
      <>
        <Banner></Banner>
        <div className="App">
          <MemeSvgViewer meme={{ selectedImg: { url: 'seigneur.jpg', id: 0 }, texts: [{ x: 50, y: 32, value: 'devenir pro react', fontSize: 10 }], temporaryText: { x: 50, y: 75, value: 'easy', fontSize: 10 } }} />
          <MemeFormEditor />
        </div>
        <Footer></Footer>
      </>
    );
  }
}

export default App;
