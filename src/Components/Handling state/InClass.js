import React,{Component} from 'react'

class InClass extends Component{
    constructor(props) {
    super(props);
    this.state = {
          message:{
            first:'',
            last:''
          }   
      }
    this.clickHander = this.clickHander.bind(this)
    }
    onChangeHandler(e){
      this.setState({ 
        message:{
        ...this.state.message,  first:e.target.value
          }
        })
    }
    clickHander(event){
      alert(`hello ${this.state.message.first} ${this.state.message.last} `)
      
      console.log("entered")
    }
    changeHandlerTwo(e){
        this.setState({
          message:{
           ...this.state.message,last:e.target.value
          }
        })
    }

  render(){
    const {message} = this.state
    const {first,last} = message 
    return(
      <div>
      <label>Username</label>
     <input  
      value={first} 
     onChange={this.onChangeHandler.bind(this)}  
     />
     <input 
      value={last}
      onChange={this.changeHandlerTwo.bind(this)} />
     <button  onClick={this.clickHander}>click me</button>
     <p>first : {this.state.message.first}  last: {this.state.message.last}  </p>
    </div>
    )
  }
}

export default InClass