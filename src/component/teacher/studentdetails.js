import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useParams} from 'react-router-dom';
import {useFetch} from '../FetchFromPost';
export const Studentdetails = () => {

  const {id:eid}=useParams();
  console.log(eid);
  var stdurl="http://localhost/ForReact/public/api/fetchStudentDetails/"+eid;
  let studentdetails = useFetch(stdurl).users;
    return (
    <div className='container'>
      <h1 align="center">STUDENT Details</h1>
      <br/><br/>
      <table className="table stripped">
        <thead>
            <tr>
            <th scope="col">STUDENT NAME</th>
            <th>{studentdetails.name}</th>
            </tr>
            <tr>
            <th scope="col">STUDENT ID</th>
            <td>{studentdetails.student_id}</td>
            </tr>
            <tr>
            <th scope="col">EMAIL</th>
            <td>{studentdetails.email}</td>
            </tr>
            <tr>
            <th scope="col">PHONE</th>
            <td>{studentdetails.phone}</td>
            </tr>
            <tr>
            <th scope="col">BIRTHDATE</th>
            <td>{studentdetails.birthdate}</td>
            </tr>
            <tr>
            <th scope="col">CREDITS COMPLETED</th>
            <td>{studentdetails.credits_completed}</td>
            </tr>
            <tr>
            <th scope="col">CGPA</th>
            <td>{studentdetails.CGPA}</td>
            </tr>
            <tr>
            <th scope="col">ADDRESS</th>
            <td>{studentdetails.address}</td>
            </tr>
            <tr>
            <th scope="col">STATUS</th>
            <td>{studentdetails.status}</td>
            </tr>
            <tr>
            <th scope="col">ADMISSION DATE</th>
            <td>{studentdetails.created_at}</td>
            </tr>
        </thead>
        </table>
    </div>
  );
};


