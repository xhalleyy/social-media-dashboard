import { useState } from 'react';
import './App.css';
import CardsComponent from './components/CardsComponent';
import TopComponent from './components/TopComponent';

function App() {
  const[isDarkMode,setIsDarkMode] = useState<boolean>(false);

  const lightTopBG: string = 'lighttopBG relative desktop:h-64';
  const darkTopBG: string ='darkTopBG relative desktop:h-64';

  const lightBG: string = 'bg-white desktop:h-screen';
  const darkBG: string = 'darkBG desktop:h-screen';
  
  return (
    <div className={!isDarkMode ? lightBG : darkBG}>
      <div className={!isDarkMode ? lightTopBG : darkTopBG}>
        <TopComponent isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
        <div className='absolute top-36'>
          <CardsComponent isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
        </div>
      </div>
    </div>
  );
}

export default App;
