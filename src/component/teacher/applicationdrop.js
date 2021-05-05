import React from 'react';
import {useFetch} from '../FetchFromPost';
import 'bootstrap/dist/css/bootstrap.min.css';

export const ApplicationDrop = () => {

    var aurl = "http://localhost/ForReact/public/api/fetchApplicationDrop";
    let drop = useFetch(aurl).users;
  return (
    <div className='container'>
        <br/>
    <table align="center" className="table table-condensed table-hover ">
        <thead className="thead-dark" align="center">
            <th scope="col">STUDENT ID</th>
            <th scope="col">COURSE ID</th>
            <th scope="col">STUDENT STATUS</th>
            <th scope="col">ACTION</th>
        </thead>
        <tbody align="center">
            {drop.map(drop=>
                <tr>
                    <td>{drop.student_id}</td>
                    <td>{drop.course_id}</td>
                    <td>{drop.status}</td>
                    <td><button className="btn btn-success">CONFIRM</button>
                        <button className="btn btn-danger">DELETE</button></td>
                </tr>
                )
                }
        </tbody>
      </table>
    <br/>
      </div>
  );
};


