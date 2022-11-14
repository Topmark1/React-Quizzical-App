import React from 'react'
import {useEffect , useState} from 'react'

 export default function Questions(){
   const [questions, getQuestions] = useState([])
    //https://opentdb.com/api.php?amount=10&category=19&difficulty=medium&type=multiple
  useEffect(()=>{
       fetchAPI()}, []
        )
        const fetchAPI = async() => {
          const res = await fetch('https://opentdb.com/api.php?amount=10&category=19&difficulty=medium&type=multiple')
          //console.log(await res.json())
            getQuestions(await res.json())
        }
    return (
        <div className='homePage'>
        <img className='circle3' alt='' src={require(`./circle2.PNG`)} />
        questions
        <div className ='questions'>{questions.map((data)=>{
          return(<li className='dd' key={data.question}>{data.category}</li>)
        })}</div>
        <img className='circle4' alt='' src={require(`./circle1.png`)} />
    </div>)
}
//https://api.imgflip.com/get_memes