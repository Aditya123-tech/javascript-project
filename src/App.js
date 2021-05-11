import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import News from './News'
import Jobs from './Jobs'
import Webdevelopement from './Webdevelopement'
import Menu from './Menu'
import Form from './Form'

const App = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="card mb-4">
              <h2>Choose your requirement</h2>
              <hr />
              <Menu />
             <Form/>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="card mb-5" >
              <h2>Post Available</h2>
              <hr />
              <Switch>
                <Route exact path="/news" component={News} />
                <Route exact path="/jobs" component={Jobs} />
                <Route path="/" component={Webdevelopement} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
