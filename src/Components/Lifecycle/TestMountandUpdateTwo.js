import React from 'react'

class TestMountandUpdateTwo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    console.log(this.state.count)
    document.title = `You clicked ${this.state.count} times`;
  }
  componentDidUpdate() {
    console.log(this.state.count)
    console.log("update")
    document.title = `You clicked ${this.state.count} times`;
  }

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    );
  }
}

export default TestMountandUpdateTwo