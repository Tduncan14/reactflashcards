import React,{Component} from 'react';
import './App.css'
import Quizbar from './components/Quizbar';
class App extends Component {

   constructor(props){
     super(props)


     this.state = {

      cardStyle:"random"


     }
   }

   
   userChoice = (cardStyle) =>{

     this.setState({

      cardStyle,
     })


   }



  render(){

    console.log(this.state.cardStyle,"state changes")

    return(
      <div className="App">
      <Quizbar userChoice = {this.userChoice} />
      </div>
    )
  }
}

export default App;
