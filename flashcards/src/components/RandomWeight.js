import React from 'react';


const RandomWeight = (props) => {


    console.log(props.questionData)

    const question = props.questionData;

    return(
        <div>
         <div className="card-back">
            {question.desc}
         </div>

         <div className="card-front">
            AWS Category
         </div>
        </div>
    )
}








export default RandomWeight;