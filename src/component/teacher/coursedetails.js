import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useParams} from 'react-router-dom';
import {useFetch} from '../FetchFromPost';

export const Coursedetails = () => {

  const {id:eid}=useParams();
  console.log(eid);
  var crsurl="http://localhost/ForReact/public/api/fetchCourseDetails/"+eid;
  let coursedetails = useFetch(crsurl).users;

  return (
    <div className='container'>
      <h1 align="center">Course Details</h1>
      <br/><br/>
      <table className="table stripped">
        <thead>
            <tr>
            <th scope="col">COURSE NAME</th>
            <th>{coursedetails.name}</th>
            </tr>
            <tr>
            <th scope="col">COURSE ID</th>
            <td>{coursedetails.course_id}</td>
            </tr>
            <tr>
            <th scope="col">COURSE CREDIT</th>
            <td>{coursedetails.credits}</td>
            </tr>
            <tr>
            <th scope="col">SUBJECT CODE</th>
            <td>{coursedetails.subject_code}</td>
            </tr>
            <tr>
            <th scope="col">SUBJECT PREREQUISITE</th>
            <td>{coursedetails.prerequisite}</td>
            </tr>
            <tr>
            <th scope="col">DEPARTMENT ID</th>
            <td>{coursedetails.department_id}</td>
            </tr>
            <tr>
            <th scope="col">SEMESTER</th>
            <td>{coursedetails.semester}</td>
            </tr>
            <tr>
            <th scope="col">CREATED AT</th>
            <td>{coursedetails.created_at}</td>
            </tr>
        </thead>
        </table>
    </div>
  );
};


