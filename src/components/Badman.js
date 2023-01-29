import React, { Component } from 'react'

export default class Badman extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       firstName: 'Hossain',
    }
    this.spiderman = React.createRef();
    this.womanRef = React.createRef();
  }
 
  changeColor(){
    this.spiderman.current.style.color='red'
    this.womanRef.current.style.color='red'
  }

  changeFontSize(){
    this.womanRef.current.style.fontSize = '3rem'
  }
  render() {
    return (
      <div>
        <h1 ref={this.spiderman}>Badman</h1>
        <button  onClick={()=> this.changeColor()}>CngColor</button>
        <h1 ref={this.womanRef}>Wonder womanr </h1>
        <button onClick={()=> this.changeFontSize()}>CngFont</button>
      </div>
    )
  }
}
