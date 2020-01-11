import React from 'react';
import { render } from 'react-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faDumbbell,faFont,faFileAlt,faDice} from '@fortawesome/free-solid-svg-icons';
import {library} from '@fortawesome/fontawesome-svg-core';
import QuizType from './QuizType';




const Quizbar = (props) =>{


   const quizArray = [
     {
       icon:"dice",
       type:"Random"
     },
     {
      icon:"file-alt",
      type:"Regular"
    },
    {
      icon:"dumbell",
      type:"Weight"
    },
    {
      icon:"font",
      type:"Multi"
    }
   ]

  return(
     <div className="quiz-bar">
       <h1>Choose your study type</h1>
        
       <ul className="nav nav-pills nav-fill">
       <QuizType userChoice={props.userChoice} quizType="Random" icon="dice"/>
       <QuizType  userChoice={props.userChoice} quizType ="Regular" icon="file-alt"/>
       <QuizType userChoice={props.userChoice}  quizType ="Weight" icon = "dumbbell" />
       <QuizType userChoice={props.userChoice}  quizType ="Multi" icon ="font"/>
       </ul>
     </div>
  )


}



export default Quizbar