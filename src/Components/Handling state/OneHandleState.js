import React,{Component} from 'react'

class OneHandleState extends Component{
  constructor(props){
    super(props)
    this.state= {
      one:'',
      two:'',
        three:'',
        four:'',
        five:'',
        six:''

    }
    this.handleChange = this.handleChange.bind(this)
    
  }
  handleChange(evt) {
  const value = evt.target.value;
  this.setState({
    ...this.state,
    [evt.target.name]: value
  });
}
  handleChangeTwo = (evt) =>{
    const valueTwo = evt.target.value;
    this.setState({
        ...this.state,
        [evt.target.name] :valueTwo
    })

     }


  render(){
    return(
      <div>
        <input name="one" value={this.state.one} onChange={this.handleChange} />
        <input name="two"  value={this.state.two}  onChange={this.handleChange} />
        <input name="three" value={this.state.three} onChange={this.handleChange}/>
        <input name="four" value={this.state.four} onChange={this.handleChangeTwo}  />
        <input name="five" value={this.state.five} onChange={this.handleChangeTwo}  />
        <input name="six" value={this.state.six} onChange={this.handleChangeTwo}  />
        <p>{this.state.one} {this.state.two} {this.state.three}</p>
        <p>{this.state.four}</p>

      </div>
    )
  }
}
export default OneHandleState