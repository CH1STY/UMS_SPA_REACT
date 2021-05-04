import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link, useHistory} from 'react-router-dom';
import useFetch from '../FetchFromPost';
import './style.css';

export const Teacherlayout = () => {
    let history = useHistory();

  if(localStorage.getItem('teacherId')==null)
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
  var url = "http://localhost/ForReact/public/api/teacher?teacherId="+localStorage.getItem('teacherId');
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
        <li><Link to="/" onClick={Logout}><i className="fas fa-sign-out-alt"></i>Logout</Link></li>
        </ul>
        </div>
        <nav>
        <div className="profileDiv" align="center" >
        <img className="profileImage" src={imgSrc} alt=""/>
        <p className="username" >{userData.name}</p>
        </div>

        <div>
        <ul>
        <li className="dropdownList"> <Link to="">Students <span>&rsaquo;</span></Link>
        <ul>
            <li><Link to="/teacher/studentlist">View Student List</Link></li>
            <li><Link to="">Add student into course</Link></li>
        </ul>
        </li>
        <li className="dropdownList"> <Link to="">Courses<span>&rsaquo;</span></Link>
            <ul>
            <li><Link to="">Search Course</Link></li>
            <li><Link to="">View Course List</Link></li>
            <li><Link to="">My Courses</Link></li>
            </ul>
        </li>
        <li> <Link to="">Accounts</Link></li>
        <li> <Link to="">Notes</Link></li>
        <li> <Link to="">Assignments</Link></li>
        <li className="dropdownList"> <Link to="">Notices<span>&rsaquo;</span></Link>
            <ul>
            <li><Link to="">Admin notices</Link></li>
            <li><Link to="">Upload notices</Link></li>
            <li><Link to="">My notices</Link></li>
            </ul>
        </li>
        <li className="dropdownList"> <Link to="">Application<span>&rsaquo;</span></Link>
            <ul>
            <li><Link to="">Get drop request</Link></li>
            <li><Link to="">Request to resign</Link></li>
            </ul>
        </li>
        <li> <Link to="https://openlibrary.org/">Library</Link></li>

        </ul>
        </div>
        </nav>
    </div>
  );
};


