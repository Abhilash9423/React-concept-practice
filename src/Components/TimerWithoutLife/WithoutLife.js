import React,{Component} from 'react';

class WithoutLife extends Component{
  constructor(props){
    super(props);
    this.state={
      count:0
    }
    this.tick = this.tick.bind(this)
    this.changeHandler = this.changeHandler.bind(this)
    this.stopHandler = this.stopHandler.bind(this)
    this.resetHandler = this.resetHandler.bind(this)
  }
  tick = () =>{
    console.log("tick method in set interval")
    this.setState({count:this.state.count+1})
  }
changeHandler(){
  console.log("entered")
  this.timer = setInterval(this.tick,1000)
    console.log(this.timer)
}
stopHandler(){
  console.log("stop entered")
  console.log(this.timer)
  clearInterval(this.timer)
}
resetHandler(){
    console.log(this.timer)
  clearInterval(this.timer)

  this.setState({
    count:0
  })
}

render(){
  return(
    <div>
    <button onClick={this.changeHandler}>start </button>
    <button onClick={this.stopHandler}
    >stop</button>
    <button onClick={this.resetHandler}>reset</button>

    <h1>{this.state.count}</h1>
    </div>
  )
}

}


export default WithoutLife