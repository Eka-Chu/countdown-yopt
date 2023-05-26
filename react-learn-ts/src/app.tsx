import { Timer } from './components/Timer';
import Countdown from './components/countdown/Countdown';
import './components/App.css'; 

function App() {
  return (
    <div className="App">
      <Timer />
      <div className="component-container">
        <Countdown />
      </div>
    </div>
  );
}

export default App;
