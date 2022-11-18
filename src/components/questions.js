import React from 'react'
import { useState} from 'react'//useEffect ,
import Quest from './quest.js'
import data from './data.js'

 export default function Questions(){
   const [questions, getQuestions] = useState(questionInfo())
   const [staticAns, setStaticAns] =useState(0)
 
function questionInfo(){
  // replace data with fetchAPI()
 return {questionsState:data,submit:false,score:1}}
 
        let key = 0
       
        //const fetchAPI = async() => {
          //const res = await fetch('https://opentdb.com/api.php?amount=10&category=19&difficulty=medium&type=multiple')
          //getQuestions(await res.clone().json().results)
          //console.log((await res.json()).results)
        //}
        
        function addScore(childState){
          let que
         que = questions.score + childState
          getQuestions((scoreState)=>
           ({...scoreState, score:que}))
          }
           //!!!!!!!!!!!!
function submitCommand(){
  setStaticAns((ans)=>ans =questions.score)
  getQuestions((submitState)=>({
    ...submitState, submit:true}))}
    
// staticAns=questions.score:'hide'//window.location.reload(false)
 //React.useEffect(()=>{[questions.submit])
 function refreshPage(){window.location.reload(false)}
 

    return (
        <div className='homePage'>
        <img className='circle3' alt='' src={require(`./circle2.PNG`)} />
        <div className ='questions'>{(questions.questionsState).map((data)=>{
          key++ 
          return(
          <Quest  
          key={key} 
          question={data.question} 
          option={data.incorrect_answers} 
          optionCorrect={data.correct_answer}
          style={questions.submit?{backgroundColor:'red'}:{backgroundColor:'yellow'}}
          answerStyle={questions.submit?{backgroundColor:'green'}:{opacity:1}} 
          scoreStatus={addScore}
         />)
        })}</div>
         <button onClick={submitCommand} style={questions.submit?{display:'none'}:{display:'flex'}}>Check Result</button> 
         <button onClick={refreshPage} style={questions.submit?{display:'flex'}:{display:'none'}}>Play Again</button>
         <div className='score'>
          {questions.submit?'You scored '+staticAns+'/'+data.length+ ' correct answers':null}
          </div>
        <img className='circle4' alt='' src={require(`./circle1.png`)} />
    </div>)
}
