import './App.css';
import Navigation from './components/Navigation'
import BottomNavigation from './components/BottomNavigation'
import Content from './components/Content';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Content />
      <BottomNavigation/>
    </div>
  );
}

export default App;
