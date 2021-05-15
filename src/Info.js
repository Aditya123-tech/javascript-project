//import { withRouter } from 'react-router-dom'
import {Route}  from 'react-router-dom';

import Form from './Form'
function Info() {
    return (
        <>
          <Route exact path='/form' component={Form}></Route>
           
        <a href='/form'> for new create</a>

        

       </>    
)
}
export default Info;