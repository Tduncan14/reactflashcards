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


    return(
      <div className="App">
      <Quizbar useChoice = {this.userChoice} />
      </div>
    )
  }
}

export default App;
