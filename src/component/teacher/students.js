import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Students = () => {
  return (
    <div className='container'>
      <h1 align="center">STUDENTS</h1>
      <br/><br/>
      <table className="table stripped">
        <thead>
            <tr>
            <th scope="col">STUDENT ID</th>
            <th scope="col">COURSE ID</th>
            <th scope="col">STUDENT STATUS</th>
            <th scope="col">ACTION</th>
            </tr>
            <tr>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>hornton</td>
            <td><button className="btn btn-success">STUDENT DETAILS</button></td>
            </tr>
        </thead>
        </table>
    </div>
  );
};

export default Students;
