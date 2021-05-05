import React from 'react';
import {useFetch} from '../FetchFromPost';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Profile = () => {

  var tpurl = "http://localhost/ForReact/public/api/teacher/profile?teacherId=" + localStorage.getItem('teacherId');
  let  profile = useFetch(tpurl).users;
  return (
    <div className='container'>
      <h1 align="center">User Details</h1>
      <br/><br/>
      <table className="table stripped">
        <thead>
            <tr>
            <th scope="col">NAME</th>
            <th>{profile.name}</th>
            </tr>
            <tr>
            <th scope="col">USERNAME</th>
            <td>{profile.username}</td>
            </tr>
            <tr>
            <th scope="col">ID</th>
            <td>{profile.teacher_id}</td>
            </tr>
            <tr>
            <th scope="col">EMAIL</th>
            <td>{profile.email}</td>
            </tr>
            <tr>
            <th scope="col">PHONE</th>
            <td>{profile.phone}</td>
            </tr>
            <tr>
            <th scope="col">BIRTHDATE</th>
            <td>{profile.birthdate}</td>
            </tr>
            <tr>
            <th scope="col">STATUS</th>
            <td>{profile.status}</td>
            </tr>
            <tr>
            <th scope="col">ADDRESS</th>
            <td>{profile.address}</td>
            </tr>
            <tr>
            <th scope="col">JOIN DATE</th>
            <td>{profile.created_at}</td>
            </tr>
            <tr align="center">
            <td>
            <Link to={`editprofile/${profile.id}`}><button class="btn btn-success">Edit</button></Link></td>
            </tr>
        </thead>
        </table>
    </div>
  );
};


