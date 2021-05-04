import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import './table.css';
import {Link,useHistory} from 'react-router-dom';
import useFetch from '../FetchFromPost';
//import {useFetch} from '../FetchFromPost';

export const AdminLayout = () => {

  let history = useHistory();

  if(localStorage.getItem('adminId')==null)
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
  var url = "http://localhost/ForReact/public/api/admin?adminId="+localStorage.getItem('adminId');
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
        <li><Link to=""><i className="fas fa-user"></i> Profile</Link></li>
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
    <li className="dropdownList"> <Link to="">Add User <span>&rsaquo;</span></Link>
      <ul>
        <li><Link to="/admin/addAdmin">Add Admin</Link></li>
        <li><Link to="">Add Account</Link></li>
        <li><Link to="">Add Teacher</Link></li>
        <li><Link to="">Add Student</Link></li>
      </ul>
    </li>
    <li className="dropdownList"> <Link to="">Course Management <span>&rsaquo;</span></Link>
      <ul>
        <li><Link to="">Add Subject</Link></li>
        <li><Link to="">Add Course</Link></li>
        <li><Link to="">View Courses</Link></li>
        <li><Link to="">View Subjects</Link></li>
      </ul>
    </li>
    <li className="dropdownList"> <Link to="">Student Management <span>&rsaquo;</span></Link>
      <ul>
        <li><Link to="">Add To Course</Link></li>
        <li><Link to="">Drop From Course</Link></li>
      </ul>
    </li>
    <li className="dropdownList"> <Link to="">Notice <span>&rsaquo;</span></Link>
      <ul>
        <li><Link to="">Add Notice</Link></li>
        <li><Link to="">View All Notices</Link></li>
      </ul>
    </li>
    <li> <Link to="">Registration Controller</Link></li>
    <li className="dropdownList"> <Link to="">Generate Report <span>&rsaquo;</span></Link>
      <ul>
        <li><Link to="">University Wise</Link></li>
      </ul>
    </li>
    <li> <Link to="">Resign Application</Link></li>
  

    
  </ul>
</nav>
    </div>
  );
};

