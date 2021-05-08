import React from 'react';
import {useFetch} from '../FetchFromPost';
import 'bootstrap/dist/css/bootstrap.min.css';

export const NoticeAdmin = () => {

    var neurl = "http://localhost/ForReact/public/api/fetchAdminNotice";
    let noticelist = useFetch(neurl).users;
  return (
    <div className='container'>
        <br/>
    <table align="center" className="table table-condensed table-hover ">
        <thead className="thead-dark" align="center">
            <th scope="col">ADMIN ID</th>
            <th scope="col">NOTICE ID</th>
            <th scope="col">VIEW NOTICE</th>
        </thead>
        <tbody>
            {noticelist.map(notice=>
                <tr>
                    <td>{notice.admin_id}</td>
                    <td>{notice.notice_id}</td>
                    <td>{notice.details}</td>
                </tr>
                )
                }
        </tbody>
      </table>
    <br/>
      </div>
  );
};


