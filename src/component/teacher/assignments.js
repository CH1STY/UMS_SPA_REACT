import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Assignment = () => {

  return (
    <div className='container'>
        <div className="row">
          <div className="col-md-6">
          <br/>
              <input type="file" name="file" className="form-control"/>
          </div>

          <div className="col-md-6">
              <button type="submit" className="btn btn-success">Upload</button>
          </div>
    </div>
    <br/>
    <table align="center" className="table table-condensed table-hover ">
        <thead className="thead-dark" align="center">
            <th scope="col">ASSIGNMENT ID</th>
            <th scope="col">VIEW ASSIGNMENT</th>
        </thead>
      </table>
      </div>
  );
};

export default Assignment;
