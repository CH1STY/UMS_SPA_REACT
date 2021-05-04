import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Courses = () => {
  return (
    <div className='container'>
      <h1 align="center">COURSES</h1>
      <br/><br/>
      <table className="table stripped">
        <thead>
            <tr>
            <th scope="col">COURSE ID</th>
            <th scope="col">COURSE NAME</th>
            <th scope="col">COURSE CREDIT</th>
            <th scope="col">CREATED AT</th>
            <th scope="col">ACTION</th>
            </tr>
            <tr>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>hornton</td>
            <td>@fat</td>
            <td><button className="btn btn-success">COURSE DETAILS</button></td>
            </tr>
        </thead>
        </table>
    </div>
  );
};

export default Courses;
