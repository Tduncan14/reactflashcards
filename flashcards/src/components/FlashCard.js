import React,{Component} from 'react';
import MultiCard from './Multicard.js';
import RandomWeight from './RandomWeight';
import RegularCard from './RegularCard';
import axios from 'axios'

class FlashCard extends Component {

     constructor(){


        super();

        this.apiHostRoot = `https://aws-services.robertbunch.dev/services`

        this.state ={
          questionData:"",
           flipClass:""
        }
     }


      flip = (e) =>{
         let newFlip = this.state.flipClass === "" ? "flip":""

         this.setState({
            
            flipClass:newFlip
         })


      }


      componentDidMount(){
         this.newCard()
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
               questionData:response.data
            })
         })





      }
   
   render(){



      return(
         <div>
        
            <div className="row align-items-center card-holder">
               <div onClick={this.flip} className={`col-sm-6 offset-sm-3 card mb-3 ${this.state.flipClass}`}>
            <RandomWeight questionData={this.state.questionData} />
            </div>
            <button onClick ={this.newCard} className="btn btn-primary btn-lg">Next Ouestion!</button>
            </div>
         </div>
      )
   }



}


export default FlashCard