import React from 'react';


const RandomWeight = (props) => {


    console.log(props.questionData)

    const question = props.questionData;

    return(
        <div>
         <div className="card-back">
            card
            
         </div>

         <div className="card-front">
             <h3></h3>
         {question.service}
         {question.desc}
         </div>
        </div>
    )
}








export default RandomWeight;