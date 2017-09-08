import React from 'react';

class Calculator extends React.Component{
  constructor(props){
    super(props);
    //your code here
    this.state = {
      result: 0,
      num1: "",
      num2: ""
    };
    this.setNum1 = this.setNum1.bind(this);
    this.setNum2 = this.setNum2.bind(this);
    this.add = this.add.bind(this);
    this.subtract = this.subtract.bind(this);
    this.multiply = this.multiply.bind(this);
    this.divide = this.divide.bind(this);
    this.clear = this.clear.bind(this);
  }

  //your code here


  setNum1(e){
    const num1 = e.target.value ? parseInt(e.target.value) : "";
    this.setState({num1});
  }
  setNum2(e){
    const num2 = e.target.value ? parseInt(e.target.value) : "";
    this.setState({num2});
  }

  add(e){
    e.preventDefault();
    const result = this.state.num1 + this.state.num2;
    this.setState({result});
  }

  subtract(e){
    e.preventDefault();
    const result = this.state.num1 - this.state.num2;
    this.setState({result});
  }

  multiply(e){
    e.preventDefault();
    const result = this.state.num1 * this.state.num2;
    this.setState({result});
  }

  divide(e){
    e.preventDefault();
    const result = this.state.num1 / this.state.num2;
    this.setState({result});
  }

  clear(e){
    e.preventDefault();
    this.setState({num1: "", num2: "", result: 0});
    console.log(this.state.num1);
    console.log(this.state.num2);
    console.log(this.state.result);
  }

  render(){
    return (
      <div>
        <h1>Hello From The Other World</h1>
        <h1>{this.state.result}</h1>
        <br/>
        <input type="text" onChange={this.setNum1} value={this.state.num1}></input>
        <input type="text" onChange={this.setNum2} value={this.state.num2}></input>
        <br/>
        <button onClick={this.add}>+</button>
        <button onClick={this.subtract}>-</button>
        <button onClick={this.multiply}>*</button>
        <button onClick={this.divide}>/</button>
        <br/>
        <button onClick={this.clear}>Clear</button>
      </div>
    );
  }
}

export default Calculator;
