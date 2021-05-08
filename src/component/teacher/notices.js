import {React,useState} from 'react';
import {useFetch} from '../FetchFromPost';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useHistory } from 'react-router';

export const Notice = () => {

  var neurl = "http://localhost/ForReact/public/api/fetchTeacherNotice";
  let noticelist = useFetch(neurl).users;
  
  const formSubmmit = (e) =>{
    e.preventDefault();
  }
  return (
    <div className='container'>
      <form onSubmit={formSubmmit}>
        <div className="row" >
          <div className="col-md-6" align="center">
          <br/>
              <textarea type="file" name="file" className="form-control"/>
          <div class="col-md-6">
              <br/>
              <button type="submit" className="btn btn-success">Upload</button>
          </div>
          </div>
      </div>

    <br/>
    <table align="center" className="table table-condensed table-hover ">
        <thead className="thead-dark" align="center">
            <th scope="col">NOTICE ID</th>
            <th scope="col">VIEW NOTICE</th>
        </thead>
        <tbody>
            {noticelist.map(notice=>
                <tr>
                    <td>{notice.teacher_notice_id}</td>
                    <td>{notice.details}</td>
                </tr>
                )
                }
        </tbody>
      </table>
    <br/>
    </form>
      </div>
  );
};


