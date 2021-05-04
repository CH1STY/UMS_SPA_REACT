import React, { useState } from 'react';
import {useFetch} from '../FetchFromPost';
import {Link} from 'react-router-dom';
export const AdminDashBoard= ()=>{
    
    //const [universities,setUniversities] = useState();

    var univUrl = "http://localhost/ForReact/public/api/fetchUniversityTable";
    var universities = useFetch(univUrl).users;

    
    return (
        <div className="container">
            <h1>This is Admin DashBoard</h1>
            <table className="table tableCustom" >
        <thead>
            <tr >
                <th className="subTableTitle" colSpan="5" >Recently Added Universities</th>
            </tr>
            <tr>
                
                <th>Name</th>
                <th>University ID</th>
                <th>Address</th>
                <th>Admin ID</th>
                <th>Creation Time</th>
            </tr>
        </thead>
        <tbody>
          {
              universities.slice(0,5).map(universities=>
                <tr>
                    <td>{universities.name}</td>
                    <td>{universities.university_id}</td>
                    <td>{universities.admin_id}</td>
                    <td>{universities.address}</td>
                    <td>{universities.created_at.substr(0,10)}</td>
                </tr>
              )
          }
        </tbody>
        <tfoot>
            <tr><td className="btmLink" colSpan="5"> <Link  href="/admin/ViewUniv">View|Edit Univeristy</Link> </td></tr>
        </tfoot>
    </table>
            
        </div>
    )
}

export default AdminDashBoard;