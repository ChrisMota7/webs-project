import { useState, useEffect } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import NavBarOff from './components/NavBarOff/NavBarOff';

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
    width: isMobile ? '100%' : '25%',
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
        {/* Content */}
      </div>
    </div>
  );
}

export default App;
