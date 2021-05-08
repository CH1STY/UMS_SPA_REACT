import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './teacherdashboard.css';

export const TeacherDashboard = () => {

    return (
    <div className='container'>
     <div className='cardstyle' align="center" >
        <div className="card" >
          <div className="card-header" >
            <h2 >University</h2>
          </div>
          <div className="card-body">
            <h4 className="card-title">Dear Faculties</h4>
            <p className="card-text">As you all know that this is an education institution, you will have to mainain the students as well as
              have to maintain some rules and regulations.<br/> Please go through the policies and if there is any query related to policies
              or any other problem you can let us know by mailing us.
            </p>
            <button className="btn btn-success">UNIVERSITY POLICY</button>
          </div>
        </div>
      </div>
    </div>
  );
};


