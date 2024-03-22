import { useState } from 'react';
import './App.css';
import CardsComponent from './components/CardsComponent';
import TopComponent from './components/TopComponent';

function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const lightTopBG: string = 'lighttopBG desktop:h-64 mobile:h-60 static top-0 left-0 mobile:-mb-12 desktop:-mb-28';
  const darkTopBG: string = 'darkTopBG desktop:h-64 mobile:h-60 static top-0 left-0 mobile:-mb-12 desktop:-mb-28';

  const lightBG: string = 'bg-white h-screen static';
  const darkBG: string = 'darkBG desktop:h-screen mobile:h-full static';

  const mobilelightBG: string = 'absolute desktop:top-28 dekstop:left-0 mobile:top-48'
  const mobiledarkBG: string = 'absolute desktop:top-28 dekstop:left-0 mobile:top-48 '

  return (
    <div className='relative'>
      <div className={!isDarkMode ? lightBG : darkBG}>
        <div className={!isDarkMode ? lightTopBG : darkTopBG}>
          <TopComponent isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
          {/* <div className={!isDarkMode ? mobilelightBG : mobiledarkBG}> */}
          {/* </div> */}
        </div>
        <CardsComponent isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}  />
      </div>
    </div>
  );
}

export default App;
