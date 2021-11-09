import logo from './logo.svg';
import './App.css';
import One from './components/One';
import Yellow from './components/Yellow';
import Sec31 from './components/Sec31';
import Sec32 from './components/Sec32';
import Sec41 from './components/Sec41';
import Sec42 from './components/Sec42';
import End from './components/End';


function App() {
  return (
    <div>
      <One />
      <Yellow />
      <div className="sec3">
        <Sec31 />
        <Sec32 />
      </div>
      <div className="sec4">
        <Sec41/>
        <Sec42 />
      </div>
      <End />
    </div>
  );
}

export default App;
