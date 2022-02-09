import Background from './bg.png';
import { BrowserRouter as Router, Route, Routes as Switch } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" element={<Home />} />
        
      </Switch>
    </Router>
    
  );
}

export default App;
