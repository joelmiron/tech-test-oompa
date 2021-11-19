import MainView from 'components/MainView/MainView';
import Navigation from 'components/Navigation';
import TopBar from 'components/Navigation/TopBar';
import './App.css';
import 'scss/MainPage.scss'


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
