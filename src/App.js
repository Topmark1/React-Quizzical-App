import Quizzical from './components/quizzical.js';
import Questions from './components/questions.js';
import Subjects from './components/subjects.js';
import './App.css';
import {Routes , Route} from 'react-router-dom'

function App() {
  
  return (
    <div  className="App">
      <Routes>
      <Route path="/" element={<Quizzical />} />
      <Route path="/subjects" element={<Subjects />} />
      <Route path="/mathematicsQuestions" 
             element={<Questions amount='10' difficulty='medium' category='19' />} 
        />
      <Route path="/GeneralQuestions"     
             element={<Questions amount='30' difficulty='medium' category='9' />} 
        />
      <Route path="/ScienceAndNature"     
             element={<Questions amount='30' difficulty='medium' category='17' />} 
        />
      <Route path="/Geography"            
             element={<Questions amount='30' difficulty='medium' category='22' />} 
        />
      <Route path="/EntertainmentBooks"   
             element={<Questions amount='30' difficulty='medium' category='10' />} 
        />
      <Route path="/ScienceComputers"     
             element={<Questions amount='30' difficulty='medium' category='18' />} 
        />
      <Route path="/Politics"             
             element={<Questions amount='20' difficulty='medium' category='24' />} 
        />
      </Routes>
      </div>
      );
}

export default App;
