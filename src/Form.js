import React, { Component } from 'react';
var array = []
class Form extends React.Component {
    
    constructor() {
        super();
        this.state = {
            title: '',
            id: '',
            body: ''
        }
    }

    handleFormSubmit() {

        array.push(this.state)
        console.log(array)
        localStorage.setItem('document', JSON.stringify(array));
        this.setState({
            id: '',
            title: '',
            body: '',
        })
    }


    render() {
        return (
            <div className="container">
                
                    <div className="form-group">
                        <label>Title</label>
                        <input type="text" name="title" className="form-control" 
                        value={this.state.title} onChange={(e) => { this.setState({ title: e.target.value }) }} />
                    </div>
                    <div className="form-group">
                        <label>id</label>
                        <input type="number" name="id" className="form-control"
                         value={this.state.id} onChange={(e) => { this.setState({ id: e.target.value }) }} />
                    </div>
                    <div className="form-group">
                        <label>Body</label>
                        <input type="text" name="body" className="form-control"
                         value={this.state.body} onChange={(e) => { this.setState({ body: e.target.value }) }} />
                    </div>
                    <button onClick={() => { this.handleFormSubmit() }} className="btn btn-primary btn-block" >Submit</button>
            
            </div>
        )
    }
}
export default Form