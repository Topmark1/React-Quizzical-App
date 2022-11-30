import React from 'react'
import { useState} from 'react'
import Quest from './quest.js'
//import data from './data.js'
import axios from 'axios'

 export default function Questions(){
   const [questions, getQuestions] = useState(questionInfo())
   const [staticAns, setStaticAns] =useState(0)
 
function questionInfo(){
  // replace data with []
 return {questionsState:[],submit:false,score:1}}
       
        React.useEffect(()=> {
        axios.get('https://opentdb.com/api.php?amount=30&category=10&difficulty=medium&type=multiple')
            .then(res=>{getQuestions((data)=>({...data, questionsState:(res.data.results)}))
            })
            .catch(err=>{ console.log(err)
            })
        },[])
        
        function addScore(childState){
          let que
         que = questions.score + childState
          getQuestions((scoreState)=>
           ({...scoreState, score:que}))
          }
           
function submitCommand(){
  setStaticAns((ans)=>ans =questions.score)
  getQuestions((submitState)=>({
    ...submitState, submit:true}))}
    
 function refreshPage(){window.location.reload(false)}
 
//,border:'2px solid red' ,border:'2px solid green'
    return (
        <div className='homePageQ'>
       <div className='questionPage'>
        <div className ='questions'>{(questions.questionsState).map((data)=>{
          return(
          <Quest  
          key = {((questions.questionsState).indexOf(data))+1}
          keyy={((questions.questionsState).indexOf(data))+1+'. '} 
          question={data.question} 
          option={data.incorrect_answers} 
          optionCorrect={data.correct_answer}
          style={questions.submit?{color:'red',backgroundColor:'rgb(255,200,200)'}:{backgroundColor:'rgb(0, 189, 210)'}}
          answerStyle={questions.submit?{color:'green',backgroundColor:'rgb(200,255,200)'}:{opacity:1}} 
          scoreStatus={addScore}
         />)
        })}</div>
         <button className='submit' onClick={submitCommand} style={questions.submit?{display:'none'}:{display:'flex'}}>Check Result</button> 
         <button className='playAgain' onClick={refreshPage} style={questions.submit?{display:'flex'}:{display:'none'}}>Play Again</button>
         <div className='score'>
          {questions.submit?'You scored '+staticAns+'/'+(questions.questionsState).length+ ' correct answers':null}
          </div>
        <img className='circle4' alt='' src={require(`../circle1.png`)} />
        </div>
    </div>)
}
