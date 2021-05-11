import React, { Component } from 'react'
import './App.css'
import axios from 'axios'

class Jobs extends Component {
  
    state = {
      hell: this.props.hello,
         todos: []
    }


 // state = { todos: [] }

  async componentDidMount() {
    let api = await axios.get('https://jsonplaceholder.typicode.com/posts')
    this.setState({ todos: api.data })
    
  }
  sendData = () => {
    this.props.parentCallback("Heyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy Popsie, How’s it going?");
}

  
  
  render() {
    return (
      <div className="container">
        {this.state.todos.length > 0 ? (
          <div>
            <table>
              <tr>
                <th>UserID</th>
                <th>ID</th>
                <th>Title</th>
              </tr>
              {this.state.todos.map((todo) => {
                return (
                  <tr>
                    <td>{todo.userId}</td>
                    <td>{todo.id}</td>
                   <td > {todo.title}  </td>
                  </tr>
                )
              })}
            </table>
          </div>
        ) : (
          <div className="spinner-border text-secondary" role="status">
            <span className="sr-only"></span>
          </div>
        )}
      </div>
    )
  }
}


export default Jobs;
