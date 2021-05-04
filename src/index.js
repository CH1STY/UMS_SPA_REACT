import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Login} from './component/Login';
import {AdminLayout} from './component/admin/adminLayout';
import {Teacherlayout} from './component/teacher/teacherlayout';
import {AddAdmin} from './component/admin/AddAdmin';
import {AddAccount} from './component/admin/AddAccount';
import {AddTeacher} from './component/admin/AddTeacher';
import {AddStudent} from './component/admin/AddStudent';
import {AdminDashBoard} from './component/admin/AdminDashBoard';
import {ViewUniv} from './component/admin/ViewUniv';
import {EditUniv} from './component/admin/EditUniv';

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
            
            <Route path='/admin/addAccount'>
              <AddAccount ></AddAccount>
            </Route>
            
            <Route path='/admin/addTeacher'>
              <AddTeacher></AddTeacher>
            </Route>
            <Route path='/admin/addStudent'>
              <AddStudent/>
            </Route>
            <Route path='/admin/viewUniv'>
              <ViewUniv/>
            </Route>
            <Route path='/admin/EditUniv/:id'>
              <EditUniv/>
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


