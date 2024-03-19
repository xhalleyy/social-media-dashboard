import './App.css';
import CardComponent from './components/CardComponent';
import TopComponent from './components/TopComponent';

function App() {
  return (
    <div>
      <div className='lighttopBG relative desktop:h-64 px-36'>
        <TopComponent/>
        <div className='absolute top-36'>
          <CardComponent/>
        </div>
      </div>
    </div>
  );
}

export default App;
