import Quizzical from './components/quizzical.js';
import MathematicsQuestions from './components/mathematics/questions.js';
import GeneralQuestions from './components/general-knowledge/questions.js';
import Subjects from './components/subjects.js';
import './App.css';
import {Routes , Route} from 'react-router-dom'

function App() {
  return (
    <div  className="App">
      <Routes>
      <Route path="/" element={<Quizzical />} />
      <Route path="/subjects" element={<Subjects />} />
      <Route path="/mathematicsQuestions" element={<MathematicsQuestions/>} />
      <Route path="/GeneralQuestions" element={<GeneralQuestions/>} />
      </Routes>
      </div>
      );
}

export default App;
