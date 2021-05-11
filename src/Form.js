import React from 'react'
import Jobs from './Jobs'
//import { Route, Switch } from 'react-router-dom'

//class Form extends React.Component {
   // constructor(props) {
    //  super(props);
    //  this.state = {value: ''};
  
    //  this.handleChange = this.handleChange.bind(this);
     // this.handleSubmit = this.handleSubmit.bind(this);
   // }
  
   // handleChange(event) {
    //  this.setState({value: event.target.value});
   // }
  
   // handleSubmit(event) {
    //  alert('A name was submitted: ' + this.state.value);
   //   event.preventDefault();
   // }
 //  const Form=()=>{
  //    console.log('hiiiihoo')
    
  
    //render() {
  //    return (
   //     <>
    //    <form onSubmit={this.handleSubmit}>
    //      <label>
           // Name:
    //        <input type="text" value={this.state.value} onChange={this.handleChange} />
    //      </label>
    //      <input type="submit" value="Submit" />
    //    </form>
       
    //    </>
   //   );
   // }
 // }
 class Form extends React.Component {
  state = { message: "" }
  callbackFunction = (childData) => {
        this.setState({message: childData})
  }
  
  
   render() {
          return (
              <div>
                   <Jobs parentCallback = {this.callbackFunction} />
                   <p> {this.state.message} </p>
                   <h1>hello</h1>
              </div>
          );
  }
  }
export default Form;