import Quizzical from './components/quizzical.js';
import Questions from './components/mathematics/questions.js';
import Subjects from './components/subjects.js';
import './App.css';
import {Routes , Route} from 'react-router-dom'

function App() {
  return (
    <div  className="App">
      <Routes>
      <Route path="/" element={<Quizzical />} />
      <Route path="/subjects" element={<Subjects />} />
      <Route path="/questions" element={<Questions/>} />
      </Routes>
      </div>
      );
}

export default App;
