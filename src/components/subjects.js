import React from 'react'
import {Link} from 'react-router-dom'

export default function Subjects(){
    return (
    <div className='homePageS'>
        <h1>
            Subjects
        </h1>
    <Link to ='/questions'><button className='startQuiz1'>Mathematics</button></Link>   
    </div>)
}
