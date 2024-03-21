import { useState } from 'react';
import './App.css';
import CardsComponent from './components/CardsComponent';
import TopComponent from './components/TopComponent';

function App() {
  const[isDarkMode,setIsDarkMode] = useState<boolean>(false);

  const lightTopBG: string = 'lighttopBG relative desktop:h-64 mobile:h-60';
  const darkTopBG: string ='darkTopBG relative desktop:h-64 mobile:h-60';

  const lightBG: string = 'bg-white h-screen';
  const darkBG: string = 'darkBG desktop:h-screen mobile:h-lvh';
  
  const mobilelightBG: string = 'absolute desktop:top-36 mobile:top-48'
  const mobiledarkBG: string = 'absolute desktop:top-36 mobile:top-48 darkBG'
  
  return (
    <div className={!isDarkMode ? lightBG : darkBG}>
      <div className={!isDarkMode ? lightTopBG : darkTopBG}>
        <TopComponent isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
        <div className={!isDarkMode ? mobilelightBG : mobiledarkBG}>
          <CardsComponent isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
        </div>
      </div>
    </div>
  );
}

export default App;
