import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import {Link} from 'react-router-dom';

export const AdminLayout = () => {
  return (
    <div>
     <div className="headNav">
        <span className="title" ><Link href="">University Management System </Link> </span>
        <ul>
        <li><Link href=""><i className="fas fa-user"></i> Profile</Link></li>
        <li><Link href=""><i className="fas fa-cog" ></i>Setting</Link></li>
        <li><Link href="" ><i className="fas fa-sign-out-alt"></i>Logout</Link></li>
        </ul>
        </div>
        <nav>
  <div class="profileDiv" align="center">
    <img class="profileImage" src="http://localhost/atpProject/public/images/admin/A6141619184489.jpg" alt=""></img>
    <p class="username"></p>
  </div>
  <ul>
    <li class="dropdownList"> <Link href="">Add User <span>&rsaquo;</span></Link>
      <ul>
        <li><Link href="">Add Admin</Link></li>
        <li><Link href="">Add Account</Link></li>
        <li><Link href="">Add Teacher</Link></li>
        <li><Link href="">Add Student</Link></li>
      </ul>
    </li>
    <li class="dropdownList"> <Link href="">Course Management <span>&rsaquo;</span></Link>
      <ul>
        <li><Link href="">Add Subject</Link></li>
        <li><Link href="">Add Course</Link></li>
        <li><Link href="">View Courses</Link></li>
        <li><Link href="">View Subjects</Link></li>
      </ul>
    </li>
    <li class="dropdownList"> <Link href="">Student Management <span>&rsaquo;</span></Link>
      <ul>
        <li><Link href="">Add To Course</Link></li>
        <li><Link href="">Drop From Course</Link></li>
      </ul>
    </li>
    <li class="dropdownList"> <Link href="">Notice <span>&rsaquo;</span></Link>
      <ul>
        <li><Link href="">Add Notice</Link></li>
        <li><Link href="">View All Notices</Link></li>
      </ul>
    </li>
    <li> <Link href="">Registration Controller</Link></li>
    <li class="dropdownList"> <Link href="">Generate Report <span>&rsaquo;</span></Link>
      <ul>
        <li><Link href="">University Wise</Link></li>
      </ul>
    </li>
    <li> <Link href="">Resign Application</Link></li>
  

    
  </ul>
</nav>
    </div>
  );
};

