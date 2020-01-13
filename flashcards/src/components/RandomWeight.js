import React from 'react';


const RandomWeight = (props) => {


    console.log(props.questionData)

    const question = props.questionData;

    return(
        <div>
         <div className="card-back">
            {question.answer}
            
         </div>

         <div className="card-front">
             <h3>Weight</h3>
         {question.service}
         {question.desc}
         </div>
        </div>
    )
}








export default RandomWeight;