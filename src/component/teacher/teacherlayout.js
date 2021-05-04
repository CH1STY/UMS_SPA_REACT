import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import './style.css';

export const Teacherlayout = () => {
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
        <div className="profileDiv" align="center" >
        <img className="profileImage" src="" alt=""/>
        <p className="username"></p>
        </div>

        <div>
        <ul>
        <li className="dropdownList"> <Link href="">Students <span>&rsaquo;</span></Link>
        <ul>
            <li><Link href="">View Student List</Link></li>
            <li><Link href="">Add student into course</Link></li>
        </ul>
        </li>
        <li className="dropdownList"> <Link href="">Courses<span>&rsaquo;</span></Link>
            <ul>
            <li><Link href="">Search Course</Link></li>
            <li><Link href="">View Course List</Link></li>
            <li><Link href="">My Courses</Link></li>
            </ul>
        </li>
        <li> <Link href="">Accounts</Link></li>
        <li> <Link href="">Notes</Link></li>
        <li> <Link href="">Assignments</Link></li>
        <li className="dropdownList"> <Link href="">Notices<span>&rsaquo;</span></Link>
            <ul>
            <li><Link href="">Admin notices</Link></li>
            <li><Link href="">Upload notices</Link></li>
            <li><Link href="">My notices</Link></li>
            </ul>
        </li>
        <li className="dropdownList"> <Link href="">Application<span>&rsaquo;</span></Link>
            <ul>
            <li><Link href="">Get drop request</Link></li>
            <li><Link href="">Request to resign</Link></li>
            </ul>
        </li>
        <li> <Link href="https://openlibrary.org/">Library</Link></li>

        </ul>
        </div>
        </nav>
    </div>
  );
};


