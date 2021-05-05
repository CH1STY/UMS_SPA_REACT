import React from 'react';
import {useFetch} from '../FetchFromPost';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Application = () => {

  return (
    <div className='container'>
    
        <div className="row" >
          <div className="col-md-6" align="center">
          <br/>
              <textarea type="file" name="file" className="form-control"/>
          <div class="col-md-6">
              <br/>
              <button type="submit" className="btn btn-success">Request to Resign</button>
          </div>
          </div>
      </div>

    <br/>
      </div>
  );
};


