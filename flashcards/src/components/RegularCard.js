import React from 'react';




function RegularCard (props) {

 

  const question = props.questionData;

  console.log(props.questionData,'props')

  console.log(question,"question",question)

    return(
        <div>
   <div className="card-front">
        
   </div>

   <div className="card-back">
{/* 
       <div>{question.desc}</div> */}
       {/* <div>{question.cat}</div> */}
       
       </div>
        </div>
    )
}



export default RegularCard;