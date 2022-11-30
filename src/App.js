import Quizzical from './components/quizzical.js';
import MathematicsQuestions from './components/mathematics/questions.js';
import GeneralQuestions from './components/general-knowledge/questions.js';
import ScienceAndNature from './components/ScienceAndNature/questions.js';
import Geography from './components/Geography/questions.js';
import EntertainmentBooks from './components/EntertainmentBooks/questions.js';
import ScienceComputers from './components/ScienceComputers/questions.js';
import Politics from './components/Politics/questions.js';
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
      <Route path="/ScienceAndNature" element={<ScienceAndNature/>} />
      <Route path="/Geography" element={<Geography/>} />
      <Route path="/EntertainmentBooks" element={<EntertainmentBooks/>} />
      <Route path="/ScienceComputers" element={<ScienceComputers/>} />
      <Route path="/Politics" element={<Politics/>} />
      </Routes>
      </div>
      );
}

export default App;
