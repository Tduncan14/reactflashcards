import React,{Component} from 'react';
import MultiCard from './Multicard.js';
import RandomWeight from './RandomWeight';
import RegularCard from './RegularCard';
import axios from 'axios';
import {faSpinner} from '@fortawesome/free-solid-svg-icons';
import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
library.add(faSpinner)

class FlashCard extends Component {

     constructor(){


        super();

        this.apiHostRoot = `https://aws-services.robertbunch.dev/services`

        this.state ={
          questionData:"",
           flipClass:"",
           ready:false
        }
     }


      flip = (e) =>{
         let newFlip = this.state.flipClass === "" ? "flip":""

         this.setState({
            
            flipClass:newFlip
         })


      }


      componentDidMount(){
        
      }


      newCard = () =>{

         let path;

         path = this.apiHostRoot+'/all';

         const cardStyle = this.props.cardStyle;


         if(cardStyle === 'Random' || cardStyle === 'Regular'){
            path = this.apiHostRoot+'/all'
         }
         else if(cardStyle ==='Weight'){
           path = this.apiHostRoot+'/weighted'
         }
         else{
            path = this.apiHostRoot+'/multi'
         }

         axios.get(path).then((response) =>{
            console.log(response.data)


            this.setState({
               questionData:response.data,
               ready:true
            })
         })





      }
   
   render(){

      if(!this.state.ready){

         this.newCard();

         

      return( <div className="spinner-wrapper">
            <FontAwesomeIcon icon="spinner" size="6x" spin/>
      </div> )

    
       
      }


      const cardStyle = this.props.cardStyle;

      let card;

      

      if(cardStyle === 'Multi'){

         card = <MultiCard questionData ={this.state.questionData}/>
      }

      else if(cardStyle === "Regular"){

          card = <RegularCard questionData = {this.state.questionData} />
      }
      else {
         
         card = <RandomWeight questionData ={this.state.questionData}/>

         console.log(this.props.cardStyle,"cardstyle")
      }

      return(
         <div>
        
            <div className="row align-items-center card-holder">
               <div onClick={this.flip} className={`col-sm-6 offset-sm-3 card mb-3 ${this.state.flipClass}`}>
           {card}
            </div>
            <button onClick ={this.newCard} className="btn btn-primary btn-lg">Next Ouestion!</button>
            </div>
         </div>
      )
   }



}


export default FlashCard