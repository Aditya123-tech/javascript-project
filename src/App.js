import { Route,Switch}  from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Data from './Data'
import Info from './Info'

import Web from './Web'

import Menu from './Menu'

function App() {
  return (
 
       <>
       <div className="container">
         <div className="row">
           <div className="col-lg-4">
             <div className="card " style={{background: "rgb(45, 48, 241)" ,color:"white" ,}}>
               <h2>Choose your requirement</h2>
               <hr style={{background:"white"}} ></hr>
              <Menu/>
             </div>
           </div>
           <div className="col-lg-8">
             <div className="card " style={{background: "rgb(45, 48, 241)" ,color:"white"}}>
               <h2>Post Available</h2>
               <hr style={{background:"white"}} ></hr>
               <Switch>
               
    <Route  exact path='/Web/:id' component={Web}></Route>
    
    
    <div ><Data /></div>
    <div ><Info /></div>
  
    </Switch>
               
             </div>
           </div>
         </div>
       </div>
     </>
  );
}

export default App;
