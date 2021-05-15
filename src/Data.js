import React from 'react';
import data from './post.json';
import { Route, Switch, Link } from 'react-router-dom';

var element = data;

class Data extends React.Component {
    constructor() {
        super()
        this.state = {
            array: []
        }
    }
    componentDidMount() {
        element.map((emp) =>
        (
            this.setState({ array: emp })
        ))
    }

    render() {
        return (
            
            element.map((emp, i) =>
            (   <table>
                 
              <tr>
                    <td>{emp.userId}</td>
                    <td>{emp.id}</td>
                    
                    <Switch>
                      <Route path="/">
                      <td  ><Link to={'/Web/' + emp.id} style={{color:"white"}}> {emp.title}</Link></td>
                      </Route>
                     
                    </Switch>
                  </tr>
              
                
                </table>
                
            ),
            )
            
        )

    }
}
export default Data;