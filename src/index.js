import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Login} from './component/Login';
import {AdminLayout} from './component/admin/adminLayout';
import {Teacherlayout} from './component/teacher/teacherlayout';
import {StudentLayout} from './component/student/studentLayout';
import {AddAdmin} from './component/admin/AddAdmin';
import {AdminDashBoard} from './component/admin/AdminDashBoard';
import {StudentList} from './component/teacher/studentlist';
import {Studentdetails} from './component/teacher/studentdetails';
import {CourseList} from './component/student/courseList';
import {CompletedCourseList} from './component/student/completedCourseList';
import {GradeCourseList} from './component/student/gradeCourseList';
import {DropedCourseList} from './component/student/dropedCourseList';
import {StudentRegistration} from './component/student/studentRegistration';
import {StudentProfile} from './component/student/studentProfile';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const Index = ()=>{

  return(

    <Router>
      <Switch>
        <Route exact path='/'>
            <Login></Login>
        </Route>
        <Route  path='/student/studentRegistration'>
            <StudentRegistration></StudentRegistration>
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
        <Route path='/teacher'>
          <Route exact path='/teacher/studentlist'>
            <StudentList></StudentList>
          </Route>
          <Route exact path='/teacher/studentDetails/:id'>
            <Studentdetails></Studentdetails>
          </Route>
            <Teacherlayout></Teacherlayout>
        </Route>

        <Route path="/teacher">
          <Teacherlayout></Teacherlayout>
        </Route>

        <Route path='/student'>
          <Route exact path='/student/courseList'>
            <CourseList></CourseList>
          </Route>
          <Route exact path='/student/completedCourseList'>
            <CompletedCourseList></CompletedCourseList>
          </Route>
          <Route exact path='/student/gradeCourseList'>
            <GradeCourseList></GradeCourseList>
          </Route>
          <Route exact path='/student/dropedCourseList'>
            <DropedCourseList></DropedCourseList>
          </Route>
          <Route exact path='/student/studentProfile'>
            <StudentProfile></StudentProfile>
          </Route>
          <StudentLayout></StudentLayout>
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


