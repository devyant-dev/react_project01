// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import './component/Style/Main.scss'
import Main from './component/Main';
import Artist from './component/Artist';
import MostView from './component/MostView';
import Period from './component/Period';

function App() {

  const metData = () => {
    //fetch('https://www.rijksmuseum.nl/api/en/collection?key=wn1LWoY9&involvedMaker=Adriaen+van+Wesel')
      fetch('https://www.rijksmuseum.nl/api/nl/collection/BK-NM-3888?key=wn1LWoY9')
      //fetch('https://www.rijksmuseum.nl/api/en/collection?key=wn1LWoY9&f.dating.period=15')
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

  new Promise(function (res, rej) {
    metData();
    rej('aa');
  })


  return (
    <BrowserRouter>
   
      <div className="App">

        <Link to={"/"}>
          main-inragyu
        </Link>
        <br />
        <Link to={"/Period"}>
          segi
        </Link>
        <br />
        <Link to={"/MostView"}>
          Ingi-ya
        </Link>
        <Routes>
          <Route path={"/"} element={ <Main /> } />
          <Route path="/Period" element={ <Period /> }/>
          <Route path="/MostView" element={ <MostView /> }/>
        </Routes>
      

        <Routes>
          <Route path="/Artist" element={ <Artist /> }/> 
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
