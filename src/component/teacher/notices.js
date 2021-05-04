import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Notice = () => {

  return (
    <div className='container'>
        <div className="row">
          <div className="col-md-6" align="center">
          <br/>
              <textarea type="file" name="file" className="form-control"/>
          <div class="col-md-6">
              <br/>
              <button type="submit" className="btn btn-success">Upload</button>
          </div>
          </div>

    </div>
    <table align="center" className="table table-condensed table-hover ">
        <thead className="thead-dark" align="center">
            <th scope="col">NOTE ID</th>
            <th scope="col">VIEW NOTE</th>
        </thead>
      </table>
    <br/>
      </div>
  );
};

export default Notice;
