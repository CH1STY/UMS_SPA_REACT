import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Login} from './component/Login';
import {AdminLayout} from './component/admin/adminLayout';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const Index = ()=>{

  return(

    <Router>
      <Route exact path='/admin'>
            <AdminLayout></AdminLayout>
        </Route>
    </Router>
  );
}

ReactDOM.render(
 <Index/>
  ,
  document.getElementById('root')
);


