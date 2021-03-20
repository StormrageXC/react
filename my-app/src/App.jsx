import logo from './logo.svg';
import React from 'react';
import './App.css';
const a = new Promise((resolve)=>setTimeout(()=>{
  resolve(new Error(123))
}));
console.log(a.then((b) => {
  console.log(b)
}));
class App extends React.Component{
  constructor(arg){
    super(arg);
    this.state = {
      user:{
        name:'jack'
      }
    };
    this.fn =this.fn.bind(this);
  }
  fn(){
    this.setState(()=>({
      user:{
        color:'rose'
      }
    }))
  }
  render(){
    return (
      <div>
              {this.state.user.name} 
      <button onClick={this.fn}>change</button>
      </div>

    )
  }
}
export default App;
