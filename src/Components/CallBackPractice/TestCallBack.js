import React, { Component } from 'react'

class TestCallBack extends Component{
    constructor(props){
        super(props);
        this.state={
            count:0
        }
    }

    increment = () => {
        console.log(this.state.count)
        this.setState({
            count:this.state.count+1
        },()=>{console.log('call back value',this.state.count)})
    }



    render(){
        return(
        <div>
            <button onClick={this.increment} >click {this.state.count} </button>
        </div>
        )
        }
}

export default TestCallBack

/*here the call back function matches with the exact count  because console.log is called before hand and 0 is printed */