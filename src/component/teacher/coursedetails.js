import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Coursedetails = () => {
  return (
    <div className='container'>
      <h1 align="center">Course Details</h1>
      <br/><br/>
      <table className="table stripped">
        <thead>
            <tr>
            <th scope="col">COURSE NAME</th>
            <th>1</th>
            </tr>
            <tr>
            <th scope="col">COURSE ID</th>
            <td>Mark</td>
            </tr>
            <tr>
            <th scope="col">COURSE CREDIT</th>
            <td>Otto</td>
            </tr>
            <tr>
            <th scope="col">SUBJECT CODE</th>
            <td>@mdo</td>
            </tr>
            <tr>
            <th scope="col">SUBJECT NAME</th>
            <td>Jacob</td>
            </tr>
            <tr>
            <th scope="col">SUBJECT PREREQUISITE</th>
            <td>Thornton</td>
            </tr>
            <tr>
            <th scope="col">DEPARTMENT NAME</th>
            <td>@fat</td>
            </tr>
            <tr>
            <th scope="col">SEMESTER</th>
            <td>Larry</td>
            </tr>
            <tr>
            <th scope="col">COURSE STATUS</th>
            <td>the Bird</td>
            </tr>
            <tr>
            <th scope="col">CREATED AT</th>
            <td>@twitter</td>
            </tr>
        </thead>
        </table>
    </div>
  );
};

export default Coursedetails;
