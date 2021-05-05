import React from 'react';
import {useFetch} from '../FetchFromPost';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Assignment = () => {

  var aurl = "http://localhost/ForReact/public/api/fetchTeacherAssignment";
  let assignmentlist = useFetch(aurl).users;
  return (
    <div className='container'>
        <div className="row">
          <div className="col-md-6">
          <br/>
              <input type="file" name="file" className="form-control"/>
          </div>

          <div className="upbtn">
              <button type="submit" className="btn btn-success">Upload</button>
          </div>
    </div>
    <br/>
    <table align="center" className="table table-condensed table-hover ">
        <thead className="thead-dark" align="center">
            <th scope="col">ASSIGNMENT ID</th>
            <th scope="col">UPLOADED AT</th>
            <th scope="col">ACTION</th>
        </thead>
        <tbody>
            {assignmentlist.map(assignment=>
                <tr>
                    <td>{assignment.assignment_id}</td>
                    <td>{assignment.created_at}</td>
                    <td><button className="btn btn-success">VIEW</button>
                        <button className="btn btn-danger">DELETE</button></td>
                </tr>
                )
                }
        </tbody>
      </table>
      </div>
  );
};


