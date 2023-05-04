import './App.css';
import GenericTable from './components/GenericTable/GenericTable';
// import Login from '../src/app/login/Login'
import NavBar from './components/NavBar/NavBar';
//import Delete from './components/delete/delete';
import Players from './json/Players.json'

function App() {
  const array = ["New", "Mew", "New"]
  // const array = ["#", "Team", "JJ", "JG", "JE", "JP", "DF", "INFAVOR", "AGAINST", "PST"]
  const players = Players

  return (
    <div className="App" style={{ display: 'flex' }}>
        <div style={{ width: '25%' }}>
          <NavBar></NavBar> 
        </div >
          {/* <Login></Login> */}
        <div style={{ width: '70%' }}>
        <GenericTable columns={array} players={players}/>
        </div>
        </div>
  );
}

export default App;
