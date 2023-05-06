import './App.css';
import GenericTable from './components/GenericTable/GenericTable';
import GenericTableAdmin from './components/GenericTableAdmin/GenericTableAdmin';
// import Login from '../src/app/login/Login'
import NavBar from './components/NavBar/NavBar';
//import Delete from './components/delete/delete';
import Players from './json/Players.json'

function App() {
  const array = ["Column 1", "Column 2", "Column 3"]
  // const array = ["#", "Team", "JJ", "JG", "JE", "JP", "DF", "INFAVOR", "AGAINST", "PST"]
  const players = Players

  return (
    <div className="App" style={{ display: 'flex' }}>
        <div style={{ width: '25%' }}>
          <NavBar></NavBar> 
        </div >
        
        <div style={{ width: '75%' }}>
        <GenericTableAdmin columns={array} content={players}/>
        </div>
        </div>
  );
}

export default App;
