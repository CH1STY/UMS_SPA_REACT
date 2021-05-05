import React from 'react';
import {useFetch} from '../FetchFromPost';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Account = () => {
  var tpurl = "http://localhost/ForReact/public/api/teacher/profile?teacherId=" + localStorage.getItem('teacherId');
  let  account = useFetch(tpurl).users;
  return (
    <div className='container'>
      <h1 align="center">ACCOUNT Details</h1>
      <br/><br/>
      <table className="table stripped">
        <thead>
            <tr>
            <th scope="col">NAME</th>
            <th>{account.name}</th>
            </tr>
            <tr>
            <th scope="col">USERNAME</th>
            <td>{account.username}</td>
            </tr>
            <tr>
            <th scope="col">EMAIL</th>
            <td>{account.email}</td>
            </tr>
            <tr>
            <th scope="col">PHONE</th>
            <td>{account.phone}</td>
            </tr>
            <tr>
            <th scope="col">SALARY</th>
            <td>{account.salary}</td>
            </tr>
            <tr>
            <th scope="col">BALANCE</th>
            <td>{account.balance}</td>
            </tr>
            <tr>
            <th scope="col">USER'S STATUS</th>
            <td>Active</td>
            </tr>
            <tr>
            <th scope="col">BIRTHDATE</th>
            <td>{account.birthdate}</td>
            </tr>
            <tr align="center">
            <td><button className="btn btn-success">PRINT</button></td>
            </tr>
        </thead>
        </table>
    </div>
  );
};

