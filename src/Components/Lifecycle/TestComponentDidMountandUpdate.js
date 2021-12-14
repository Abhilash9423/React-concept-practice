import React,{Component} from 'react'


class TestComponentDidMountandUpdate extends Component{

  constructor(props){
    super(props)    
    this.state ={
      count:0
    }
  }

  componentDidMount(){
    document.title = `clicked {this.state.count}`
    console.log("componentDidmount")
  }
  componentDidUpdate(prevProps,prevState){
    console.log("componentDIdupdate")
  }


render(){
  return(
    <button onClick={()=>this.setState({count:this.state.count+1})}> click {this.state.count} </button>
  )
}

}



export default TestComponentDidMountandUpdate