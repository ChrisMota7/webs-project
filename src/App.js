import './App.css';
import NavBar from './components/NavBar/NavBar';
import Card from './components/Card/Card';
import img from "./img/team2.jpg"
import img3 from "./img/team3.jpg"

function App() {
  const alterImg = "Image"
  const team = "Team 1!"

  return (
    <div className="App" style={{ display: 'flex' }}>
      <div style={{ width: '25%' }}>
        <NavBar></NavBar> 
      </div >
      
      <div style={{ width: '75%' }}>
        <Card image={img} alterImg={alterImg} teamName={team}/>
        <br />
        <Card image={img3} alterImg={alterImg} teamName={team}/>
      </div>
    </div>
  );
}

export default App;
