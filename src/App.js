import MainView from 'components/MainView';
import Navigation from 'components/Navigation';
import TopBar from 'components/Navigation/TopBar';
import './App.css';

function App() {
  return (
    <div className="App">
    <Navigation/>
    <TopBar/>
    <MainView/>
    </div>
  );
}

export default App;
