import React from 'react'
import './quizzical.css';
import {Link} from 'react-router-dom'


export default function Quizzical(){

    return (
    <div className='homePage'>
        <div className='page' >
        <div >
        <img className='IQlogo' alt='' src={require(`./IQlogo.PNG`)} />
        <h1 className='title'>Quizzical</h1>
        <p className='titleDown'>Intelligent Quotient Test</p>
    <Link to ='/subjects'><button className='startQuiz'>Start Quiz</button></Link>
    </div>
    <div><img className='circle1' alt='' src={require(`./circle1.png`)} /></div>
    </div>
    </div>)
}