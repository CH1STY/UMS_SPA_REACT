import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Login} from './component/Login';
import {AdminLayout} from './component/admin/adminLayout';
import {Teacherlayout} from './component/teacher/teacherlayout';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const Index = ()=>{

  return(

    <Router>
      <Switch>
        <Route exact path='/'>
            <Login></Login>
        </Route>
        <Route exact path='/admin'>
            <AdminLayout></AdminLayout>
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


