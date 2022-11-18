import React from 'react'
import { useState} from 'react'

 export default function Quest({scoreStatus,answerStyle,optionCorrect,option,style,key,question}){
    const [shuffled, shuffle] = useState([])
   const [Option1, Answer1] = useState(false)
   const [Option2, Answer2] = useState(false)
   const [Option3, Answer3] = useState(false)
   const [Option4, Answer4] = useState(false)
       
        function SetAnswerState1(){
         Answer1((state)=> {
            Answer2(false)
            Answer3(false)
            Answer4(false)
           return  !state})}
        function SetAnswerState2(){
                Answer2((state)=> {
                   Answer1(false)
                   Answer3(false)
                   Answer4(false)
                   return !state})}
        function SetAnswerState3(){
                    Answer3((state)=> {
                       Answer2(false)
                       Answer1(false)
                       Answer4(false)
                       return !state})}
        function SetAnswerState4(){
                        Answer4((state)=> {
                           Answer2(false)
                           Answer3(false)
                           Answer1(false)
                           return !state})}
                           
        React.useEffect(()=>{
            shuffle(()=>{let arr = [1,2,3,4]
                for (let i = arr.length-1;i>0;i--){
                    const x = Math.floor(Math.random()*(i+1));
                    let y = arr[i];
                    arr[i]=arr[x];
                    arr[x] = y;}
                return arr})
                },[])

        let id1 = Option1?'correctAnswer':'notSelectedAnswer';
        let id2 = Option2?'wrongAnswer':'notSelectedAnswer';
        let id3 = Option3?'wrongAnswer':'notSelectedAnswer';
        let id4 = Option4?'wrongAnswer':'notSelectedAnswer';

        React.useEffect(
            (event)=> {Option1?((scoreStatus)(1)):((scoreStatus)(-1))},[Option1])
             
        const optionsArr = [
        <div className='option' id={id1} onClick={SetAnswerState1} style={answerStyle}>{optionCorrect}</div>,
        <div className='option' id={id2} onClick={SetAnswerState2} style={Option2?style:{backgroundColor:'white'}}>{(option)[0]}</div>,
        <div className='option' id={id3} onClick={SetAnswerState3} style={Option3?style:{backgroundColor:'white'}}>{(option)[1]}</div>,
        <div className='option' id={id4}  onClick={SetAnswerState4} style={Option4?style:{backgroundColor:'white'}}>{(option)[2]}</div>
        ]
        
        let optioned = [].concat(shuffled)
        optioned[optioned.indexOf(1)] = optionsArr[0]
        optioned[optioned.indexOf(2)] = optionsArr[1]
        optioned[optioned.indexOf(3)] = optionsArr[2]
        optioned[optioned.indexOf(4)] = optionsArr[3]

    return (
        <div className='quest' key={key}>
        <div className='question'>{question}</div>
        <div className='options'>
        {optioned}
        </div>
       <hr></hr>       
        </div>)
}
