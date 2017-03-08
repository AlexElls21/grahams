import React, { Component } from 'react';


export default class App extends Component {
  constructor(props) {
    super(props);
    console.log('constructor');
  }
  componentWillMount() {
    console.log('componentWillMount');
  }
  render() {
    console.log('render');
    return (
      <div className="home-wrapper">
        {this.props.children}
      </div>
    )
  }
  componentDidMount() {
    console.log('componentDidMount');
  }
}
