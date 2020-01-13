import React,{Component} from 'react';
import './App.css'
import Quizbar from './components/Quizbar';
import FlashCard from './components/FlashCard';
class App extends Component {

   constructor(props){
     super(props)


     this.state = {

      cardStyle:"random",
      ready:false


     }
   }

   
   userChoice = (cardStyle) =>{

     this.setState({

      cardStyle,
      ready:false
     })


   }

   nowReady = () =>{
     this.setState({
       ready:true
     })
   }



  render(){

    console.log(this.state.cardStyle,"state changes")

    return(
      <div className="App align-items-center d-flex">
        <div className="container">
      <Quizbar userChoice = {this.userChoice} />

      <FlashCard cardStyle={this.state.cardStyle} nowReady={this.nowReady} ready={this.state.ready}/>
      </div>
      </div>
    )
  }
}

export default App;
