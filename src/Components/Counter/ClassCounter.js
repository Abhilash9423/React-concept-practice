import React, { Component } from 'react'


class ClassCounter extends Component{
    constructor(props){
        super(props);
        this.state={
            count:0,
            timerOn:null
        }
    }
    onStart = ()=> {
        this.setState({
            timerOn:true
        })
    }
    onStop = ()=>{
        this.setState({
            timerOn:false
        })
    }
    reset = () => {
        this.setState({
            timerOn:false,
            count:0
        })
    }

    componentDidMount(){
        console.log(this.state.count)
        console.log("this is component did mount")
        if(this.state.timerOn){
            this.timer = setInterval(()=>{
                this.setState({
                    count:this.state.count+1
                })
            })
        }
        
        else{
            clearInterval(this.timer)
            console.log("entered for first check when count is 0 :",this.state.count )
            
        }
    }
    
    componentDidUpdate(){
        console.log("entered component did update when counter value is :",this.state.count )
        clearInterval(this.timer) 
        if(this.state.timerOn){
        this.timer = setInterval(()=>{
            this.setState({
          count:this.state.count+1
        })
        },1000)
        }
            else{
                console.log("entered for else to clear the timer when counter value is:",this.state.count )
          clearInterval(this.timer)
        }
      }

      componentWillUnmount() {
          console.log("entered component will unmount")
           clearInterval(this.timer);
      }

    render(){
        return(
            <div>
                <h1> {this.state.count}</h1>
                <button onClick={()=>this.onStart()} > Start   </button>
                <button onClick={()=>this.onStop()}>   Stop      </button>
                <button onClick={()=>this.reset()}> Reset    </button>
            </div>
        )
    }
}

export default ClassCounter



/*
    initially at first render it enter component did mount and initializes the state value to 0 it enters else block and also clears the timer
    when we start the timer enters component did update, and updates the state,for every rerender we have to clear the timer so we place the clearInterval function
    at the bigining of component did mount. 
    to stop and reset we use the else block in component did mount 
    in this squence componentwillunmount is never entered

*/ 