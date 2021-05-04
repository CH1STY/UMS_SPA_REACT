import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Login} from './component/Login';
import {AdminLayout} from './component/admin/adminLayout';
import {Teacherlayout} from './component/teacher/teacherlayout';
import {AddAdmin} from './component/admin/AddAdmin';
import {AdminDashBoard} from './component/admin/AdminDashBoard';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const Index = ()=>{

  return(

    <Router>
      <Switch>
        <Route exact path='/'>
            <Login></Login>
        </Route>
        <Route path='/admin'>
           <Route exact path ='/admin'>
             <AdminDashBoard></AdminDashBoard>
           </Route>
            
            <Route path='/admin/addAdmin'>
              <AddAdmin ></AddAdmin>
            </Route>

            <AdminLayout></AdminLayout>
        
        </Route>
        <Route exact path='/teacher'>
            <Teacherlayout></Teacherlayout>
        </Route>


      

        <Route path="/teacher">
          <Teacherlayout></Teacherlayout>
        </Route>
      </Switch>
    </Router>
  );
}

ReactDOM.render(
 <Index/>
  ,
  document.getElementById('root')
);


