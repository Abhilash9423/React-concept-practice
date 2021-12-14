import React,{Component} from 'react'
import ReactDOM from 'react-dom'

class TestComponentWillMountandDidMount extends Component{

  UNSAFE_componentWillMount(){
    console.log("before the compoenent is mounted")
    console.log(ReactDOM.findDOMNode(this))
  }
  componentDidMount(){
    console.log("after the compoenent is mounted")
    console.log(ReactDOM.findDOMNode(this))
  }
  render(){
    return(
      <div>
      <h1>hello </h1>
      </div>
    )
  }
}

export default TestComponentWillMountandDidMount