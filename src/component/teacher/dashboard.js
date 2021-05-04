/*import React, { useState, Fragment } from 'react';
import { BrowserRouter as Router, Link, Route,Switch } from 'react-router-dom';
import Account from './account';
import Application from './application';
import Assignment from './assignments';
import Course from './courses';
import Note from './notes';
import Notice from './notices';
import Student from './students';

const Dashboard = () => {

  return (
    <div className='container'>
      <h1>This is Dashboard</h1>
      <Link to='/account' className="btn btn-primary">Account </Link> &nbsp;
      <Link to='/application' className="btn btn-primary">Application </Link> &nbsp;
      <Link to='/assignments' className="btn btn-primary">Assignment </Link> &nbsp;
      <Link to='/courses' className="btn btn-primary">Course </Link> &nbsp;
      <Link to='/notes' className="btn btn-primary">Note</Link> &nbsp;
      <Link to='/notices' className="btn btn-primary">Notice </Link> &nbsp;
      <Link to='/students' className="btn btn-primary">Student</Link>
      <Router>
          <Switch>
            <Route exact path="/account" component={Account} />
            <Route exact path="/application" component={Application}/>
            <Route exact path="/assignments" component={Assignment} />
            <Route exact path="/courses" component={Course} />
            <Route exact path="/notes" component={Note} />
            <Route exact path="/notices" component={Notice} />
            <Route exact path="/students" component={Student} />
          </Switch>
      </Router>

    </div>
  );
};

export default Dashboard;*/
