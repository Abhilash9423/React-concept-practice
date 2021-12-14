
import React from 'react'

class LearnFive extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count:0};
  }

  componentDidMount() {
    this.timerId = setInterval(
      () => {
        this.tick()
       console.log(this.state.count + " in component did mount")
      } ,
      1000
    );
  }
  componentDidUpdate(){
    clearInterval(this.timerId)
    this.timerId = setInterval(     
      () => {
        console.log(this.state.count + "in compoent did update")
        this.tick()
      } ,
      1000
    );
  }
  


  tick() {
    this.setState({
      count:this.state.count+1
    });
  }

  render() {
    
    return (
      <div>
        <h1>Hello, world!</h1>
        <h1>{this.state.count}</h1>
      </div>
    );
  }
}

export default LearnFive