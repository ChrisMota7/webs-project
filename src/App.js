import { useState, useEffect } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar'
import TopNavBar from './components/TopNavBar/TopNavBar'
import NavBarOff from './components/NavBarOff/NavBarOff'
// import Championships from './app/Championships/Championships';
import Competitions from './app/Competitions/Competitions'
import Team from './app/Team/Team'
import User from './app/User/User'
import Goles from './app/Goles/Goles'
import Points from './app/Points/Points'

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    setIsMobile(mediaQuery.matches);
    const handleResize = (e) => setIsMobile(e.matches);
    mediaQuery.addEventListener('change', handleResize);
    return () => mediaQuery.removeEventListener('change', handleResize);
  }, []);

  const navbarStyle = {
    width: isMobile ? '0%' : '25%',
  };

  const contentStyle = {
    width: isMobile ? '100%' : '75%',
  };

  return (
    <div className="App" style={{ display: 'flex' }}>
      <div style={navbarStyle}>
        {isMobile ? <NavBarOff /> : <NavBar />}
      </div>
      <div style={contentStyle}>
        <TopNavBar />
        {/* <Championships /> */}
        {/* <Competitions /> */}
        <Team />
        <User />
        <Goles />
        <Points />
        
      </div>
    </div>
  );
}

export default App;
