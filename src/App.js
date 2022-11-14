import Quizzical from './components/quizzical.js';
import Questions from './components/questions.js';
import './App.css';
import {Routes , Route} from 'react-router-dom'

function App() {
  return (
    <div  className="App">
      <Routes>
      <Route path="/" element={<Quizzical />} />
      <Route path="/questions" element={<Questions/>} />
      </Routes>
      </div>
      );
}

export default App;
