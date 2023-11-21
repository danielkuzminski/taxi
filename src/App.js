import './App.css';
import Order from './components/Order';
import Landing from './components/Landing';
import Hamburger from './components/Hamburger';


function App() {
  return (
    <div className="App">
      <Hamburger />
      <Landing />
      <Order />
    </div>
  );
}

export default App;
