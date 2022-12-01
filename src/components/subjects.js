import React from 'react'
import {Link} from 'react-router-dom'

export default function Subjects(){
    return (
    <div className='homePageS'>
        <h1>
            Subjects
        </h1>
    <Link to ='/GeneralQuestions'>
        <button className='startQuiz1'>General Knowledge</button>
    </Link>  
    <Link to ='/mathematicsQuestions'>
        <button className='startQuiz1'>Mathematics</button>
    </Link> 
    <Link to ='/ScienceAndNature'>
        <button className='startQuiz1'>Science & Nature</button>
    </Link>
    <Link to ='/Geography'>
        <button className='startQuiz1'>Geography</button>
    </Link>
    <Link to ='/EntertainmentBooks'>
        <button className='startQuiz1'>Entertainment: Books</button>
    </Link>
    <Link to ='/ScienceComputers'>
        <button className='startQuiz1'>Science: Computers</button>
    </Link>
    <Link to ='/Politics'>
        <button className='startQuiz1'>Politics</button>
    </Link>
    </div>)
}
