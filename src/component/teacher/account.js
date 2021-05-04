import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Account = () => {
  return (
    <div className='container'>
      <h1 align="center">ACCOUNT Details</h1>
      <br/><br/>
      <table className="table stripped">
        <thead>
            <tr>
            <th scope="col">NAME</th>
            <th>1</th>
            </tr>
            <tr>
            <th scope="col">USERNAME</th>
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
            <th scope="col">SALARY</th>
            <td>Jacob</td>
            </tr>
            <tr>
            <th scope="col">BALANCE</th>
            <td>Thornton</td>
            </tr>
            <tr>
            <th scope="col">USER'S STATUS</th>
            <td>@fat</td>
            </tr>
            <tr>
            <th scope="col">BIRTHDATE</th>
            <td>Larry</td>
            </tr>
        </thead>
        </table>
    </div>
  );
};

export default Account;
