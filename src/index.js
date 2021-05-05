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
import {StudentList} from './component/teacher/studentlist';
import {Studentdetails} from './component/teacher/studentdetails';
import {CourseList} from './component/teacher/courselist';
import {Coursedetails} from './component/teacher/coursedetails';
import {TeacherDashboard} from './component/teacher/teacherdashboard';
import {Note} from './component/teacher/notes';
import {Notice} from './component/teacher/notices';
import {Application} from './component/teacher/application';
import {ApplicationDrop} from './component/teacher/applicationdrop';
import {Assignment} from './component/teacher/assignments';
import {Account} from './component/teacher/account';
import {Profile} from './component/teacher/profile';
import {NoticeAdmin} from './component/teacher/noticeadmin';
import {ViewUniv} from './component/admin/ViewUniv';
import {EditUniv} from './component/admin/EditUniv';
import {ProfileEdit} from './component/teacher/profileedit';

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
        <Route path='/teacher'>
        
          <Route exact path='/teacher/studentlist'>
            <StudentList></StudentList>
          </Route>
          <Route exact path='/teacher/studentDetails/:id'>
            <Studentdetails></Studentdetails>
          </Route>
          <Route exact path='/teacher/courselist'>
            <CourseList></CourseList>
          </Route>
          <Route exact path='/teacher/courseDetails/:id'>
            <Coursedetails></Coursedetails>
          </Route>
          <Route exact path='/teacher/notes'>
            <Note></Note>
          </Route>
          <Route exact path='/teacher/assignment'>
            <Assignment></Assignment>
          </Route>
          <Route exact path='/teacher/notices'>
            <Notice></Notice>
          </Route>
          <Route exact path='/teacher/adminnotice'>
            <NoticeAdmin></NoticeAdmin>
          </Route>
          <Route exact path='/teacher/account'>
            <Account></Account>
          </Route>
          <Route exact path='/teacher/application'>
            <Application></Application>
          </Route>
          <Route exact path='/teacher/applicationdrop'>
            <ApplicationDrop></ApplicationDrop>
          </Route>
          <Route exact path='/teacher/profile'>
            <Profile></Profile>
          </Route>
          <Route exact path='/teacher/editprofile/:id'>
            <ProfileEdit></ProfileEdit>
          </Route>
          <Route exact path='/teacher'>
            <TeacherDashboard></TeacherDashboard>
          </Route>
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


