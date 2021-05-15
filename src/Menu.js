import React from 'react'
import './App.css';
import { Link, Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Form from './Form'
const Menu = () => {
  return (
    <>

      <Link to="/" className="hrr" style={{color:"white"}}>News</Link>

      <Link to="/jobs" className="hrr" style={{color:"white"}}>Jobs</Link>
      <Link to="/webdevelopement" className="hrr" style={{color:"white"}}> Web Development</Link>
      <Switch>
        <Route path="/">
          <td ><Link to="/form"><button>Add Post</button></Link></td>
        </Route>
        
      </Switch>
      <Route path="/form" component={Form}></Route>

    </>
  )
}
export default Menu;
