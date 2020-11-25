import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Views/Home';
import Weather from './Views/Weather';
import GetInfo from './Views/GetInfo';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/weather" render={(props) => <Weather {...props}/>}/>
        <Route path="/getinfo">
          <GetInfo />
        </Route>
      </Router>
    </div>
  );
}

export default App;
