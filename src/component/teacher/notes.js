import React from 'react';
import {useFetch} from '../FetchFromPost';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Note = () => {

  var nourl = "http://localhost/ForReact/public/api/fetchTeacherNote";
  let notelist = useFetch(nourl).users;
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
            <th scope="col">NOTE ID</th>
            <th scope="col">VIEW NOTE</th>
        </thead>
        <tbody>
            {notelist.map(note=>
                <tr>
                    <td>{note.note_id}</td>
                    <td>{note.details}</td>
                </tr>
                )
                }
        </tbody>
      </table>
      </div>
  );
};

