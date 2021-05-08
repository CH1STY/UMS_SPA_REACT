import React, { useState } from 'react';
import {Link,useHistory} from 'react-router-dom';
import useFetch from '../FetchFromPost';
//import {useFetch} from '../FetchFromPost';

export const StudentLayout = () => {

  let history = useHistory();
  console.log(localStorage.getItem('studentId'));

  if(localStorage.getItem('studentId')==null)
  {
    history.push("/");
  }

  const Logout=()=>
  {
    var url ="http://localhost/ForReact/public/api/logout";
    fetch(url).then(function(response){
      response.json().then(function(resp){
        console.log(resp);
      })
    })
    localStorage.clear();
  }
  var url = "http://localhost/ForReact/public/api/student?studentId="+localStorage.getItem('studentId');
  const userData = useFetch(url).users;


  var imgSrc;
  if(userData.profile_pic===null)
  {
    imgSrc = "http://localhost/atpProject/public/images/dummy.png";
  }
  else
  {
    imgSrc = "http://localhost/atpProject/public/"+userData.profile_pic;
  }




  return (
    <div>
     <div className="headNav">
        <span className="title" ><Link to="">University Management System </Link> </span>
        <ul>
        <li><Link to="/student/studentProfile"><i className="fas fa-user"></i> Profile</Link></li>
        <li><Link to=""><i className="fas fa-cog" ></i>Setting</Link></li>
        <li><Link to="/" onClick={Logout} ><i className="fas fa-sign-out-alt"></i>Logout</Link></li>
        </ul>
        </div>
        <nav>
  <div className="profileDiv" align="center">
    <img className="profileImage" src ={imgSrc} alt=""></img>
    <p className="username">{userData.name}</p>
  </div>
  <ul>
    <li class="dropdownList"> <Link to="">View Courses <span>&rsaquo;</span></Link>
      <ul>
        <li><Link to="/student/courseList">View All Courses</Link></li>
        <li><Link to="/student/completedCourseList">View Completed Courses</Link></li>
        <li><Link to="/student/gradeCourseList">View Courses With Marks</Link></li>
        <li><Link to="/student/dropedCourseList">View Droped Courses</Link></li>
      </ul>
    </li>
    
  </ul>
</nav>
    </div>
  );
};

