import React, { Component } from 'react'
import './App.css'
import Sqaure from './components/Square'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      squares: ["?", "?", "?", "?", "?", "?", "?", "?", "?"],
      treasureLocation: null
    }
  }

  componentDidMount(){
    let treasure = Math.floor(Math.random() * this.state.squares.length)
    this.setState({ treasureLocation: treasure })
  }

handleGamePlay = (index) => {
  const { squares, treasureLocation } = this.state
  if(index === treasureLocation){
    squares[index] = "💎"
    this.setState({ squares: squares })
  }else{
    squares[index] = "🌴"
    this.setState({ squares: squares })
  }
}


  render(){
    console.log("treasureLocation:", this.state.treasureLocation)
    return(
      <React.Fragment>
        <h1>Treasure Hunt App</h1>
        <div id = "gameboard">
        { this.state.squares.map((value, index) => {
          return (
            <Sqaure 
              value = { value }
              key = { index }
              index = { index }
              handleGamePlay = {this.handleGamePlay}
            />
            )
         })
        }
        </div>
      </React.Fragment>
    )
  }
}
export default App
