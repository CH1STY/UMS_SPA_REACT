import {React,useState} from 'react';
import {useFetch} from '../FetchFromPost';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useHistory } from 'react-router';

export const Assignment = () => {

    var history =  useHistory();
    var aurl = "http://localhost/ForReact/public/api/fetchTeacherAssignment";
    let assignmentlist = useFetch(aurl).users;

  const [assignment, setAssignment] = useState({});
  const onUpload = (e)=>{
      setAssignment(e.target.files[0]);
  };

  const formsubmit = (e)=>{
    e.preventDefault();
    var data = new FormData();
    data.append("assignmentfile",assignment);
    data.append("teacherId",localStorage.getItem('teacherId'));
    const postdata = async ()=>{
        const response = await axios.post(aurl,data);
        console.log(response.data);
        if(response.data.toString()==='okay')
        {
            alert('file Uploaded');
            history.go(0);
        }
        else alert('Assignment upload failed');
    }
    postdata();
};
    const download=(details)=>{
        window.open(details);
    }
    const deleteAssignment=(assignmentId)=>{
        var deleteassignment = "http://localhost/ForReact/public/api/deleteTeacherAssignment/"+assignmentId;
        const deletedata = async ()=>{
            const response = await axios.get(deleteassignment);
            console.log(response.data);
            history.go(0);
        }
        deletedata();
    }
  return (
    <div className='container'>
        <form onSubmit={formsubmit}>
        <div className="row">
          <div className="col-md-6">
          <br/>
              <input type="file" name="file" onChange={onUpload} className="form-control"/>
          </div>

          <div className="upbtn">
              <button type="submit" className="btn btn-success">Upload</button>
          </div>
    </div>
    <br/>
    </form>
    <table align="center" className="table table-condensed table-hover ">
        <thead className="thead-dark" align="center">
            <th scope="col">ASSIGNMENT ID</th>
            <th scope="col">UPLOADED AT</th>
            <th scope="col">ACTION</th>
        </thead>
        <tbody>
            {assignmentlist.map(assignment=>
                <tr>
                    <td>{assignment.assignment_id}</td>
                    <td>{assignment.created_at}</td>
                    <td><button onClick={()=>download(assignment.details)} className="btn btn-success">VIEW</button>
                        <button onClick={()=>deleteAssignment(assignment.id)} className="btn btn-danger">DELETE</button></td>
                </tr>
                )
                }
        </tbody>
      </table>
    
      </div>
  );
};


