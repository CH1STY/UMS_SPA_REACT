import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Studentdetails = () => {
  return (
    <div className='container'>
      <h1 align="center">STUDENT Details</h1>
      <br/><br/>
      <table className="table stripped">
        <thead>
            <tr>
            <th scope="col">STUDENT NAME</th>
            <th>1</th>
            </tr>
            <tr>
            <th scope="col">STUDENT ID</th>
            <td>Mark</td>
            </tr>
            <tr>
            <th scope="col">EMAIL</th>
            <td>Otto</td>
            </tr>
            <tr>
            <th scope="col">PHONE</th>
            <td>@mdo</td>
            </tr>
            <tr>
            <th scope="col">BIRTHDATE</th>
            <td>Jacob</td>
            </tr>
            <tr>
            <th scope="col">CREDITS COMPLETED</th>
            <td>Thornton</td>
            </tr>
            <tr>
            <th scope="col">CGPA</th>
            <td>@fat</td>
            </tr>
            <tr>
            <th scope="col">ADDRESS</th>
            <td>Larry</td>
            </tr>
            <tr>
            <th scope="col">STATUS</th>
            <td>the Bird</td>
            </tr>
            <tr>
            <th scope="col">ADMISSION DATE</th>
            <td>@twitter</td>
            </tr>
        </thead>
        </table>
    </div>
  );
};

export default Studentdetails;
