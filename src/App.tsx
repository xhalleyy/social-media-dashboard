import './App.css';
import CardComponent from './components/CardComponent';
import CardsComponent from './components/CardsComponent';
import TopComponent from './components/TopComponent';

function App() {
  return (
    <div>
      <div className='lighttopBG relative desktop:h-64'>
        <TopComponent/>
        <div className='absolute top-36'>
          <CardsComponent/>
        </div>
      </div>
    </div>
  );
}

export default App;
