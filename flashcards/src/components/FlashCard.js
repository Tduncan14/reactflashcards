import React,{Component} from 'react';
import MultiCard from './Multicard.js';
import RandomWeight from './RandomWeight';
import RegularCard from './RegularCard';


class FlashCard extends Component {

     constructor(){


        super();

        this.state ={
           flipClass:""
        }
     }


      flip = (e) =>{



      }
   
   render(){



      return(
         <div>
        
            <div className="row align-items-center card-holder">
               <div onClick={this.flip} className="col-sm-6 offset-sm-3 card mb-3">
            <RandomWeight />
            </div>
            </div>
         </div>
      )
   }



}


export default FlashCard