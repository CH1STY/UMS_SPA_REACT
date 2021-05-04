import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Profile = () => {
  return (
    <div className='container'>
      <h1 align="center">User Details</h1>
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
            <th scope="col">ID</th>
            <td>Otto</td>
            </tr>
            <tr>
            <th scope="col">EMAIL</th>
            <td>@mdo</td>
            </tr>
            <tr>
            <th scope="col">PHONE</th>
            <td>Jacob</td>
            </tr>
            <tr>
            <th scope="col">BIRTHDATE</th>
            <td>Thornton</td>
            </tr>
            <tr>
            <th scope="col">STATUS</th>
            <td>@fat</td>
            </tr>
            <tr>
            <th scope="col">ADDRESS</th>
            <td>Larry</td>
            </tr>
            <tr>
            <th scope="col">JOIN DATE</th>
            <td>the Bird</td>
            </tr>
            <tr align="center">
            <td><button className="btn btn-success">EDIT</button></td>
            </tr>
        </thead>
        </table>
    </div>
  );
};

export default Profile;
