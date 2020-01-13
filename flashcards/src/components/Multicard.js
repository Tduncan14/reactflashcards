import React from 'react';



const MultiCard = (props) =>{

    const choices = ["a","b","c","d"]

    // const options = question.options.map((option,i) => {
    //  return(<li key={i}>{choices[i]}. {option}</li>)
    // })

    // const answerIndex = question.options.indexOf(question.answer)

    // const answerLetter = choices[answerIndex] gives me the letter;




    return(
        <div>
            <div className="card-front">
              <div> MultiCard </div>

                <ul className ="multi">
      
            </ul>
            </div>

            <div className="card-front">
                 Front
            </div>
        </div>
    )
    }



    export default MultiCard;