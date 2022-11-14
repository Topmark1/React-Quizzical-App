import React from 'react'
import './quizzical.css';
import {Link} from 'react-router-dom'


export default function Quizzical(){

    return (
    <div className='homePage'>
        <img className='circle2' alt='' src={require(`./circle2.PNG`)} />
        <img className='circle1' alt='' src={require(`./circle1.png`)} />
        <h1 className='title'>Quizzical</h1>
        <p className='titleDown'>Intelligent Quotient Test</p>
    <Link to ='/questions'><button className='startQuiz'>Start Quiz</button></Link>
    </div>)
}