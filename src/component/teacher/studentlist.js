import {useFetch} from '../FetchFromPost';
import {Link} from 'react-router-dom';

export const StudentList=()=>{
    var stdurl = "http://localhost/ForReact/public/api/fetchStudent";
    let studentlist = useFetch(stdurl).users;
    return(
        <div className="container">
            <h1 align="center">STUDENTS</h1>
      <br/><br/>
      <table className="table stripped">
        <thead>
            <tr>
            <th scope="col">STUDENT ID</th>
            <th scope="col">STUDENT NAME</th>
            <th scope="col">STUDENT STATUS</th>
            <th scope="col">ACTION</th>
            </tr>
        </thead>
        <tbody>
            {studentlist.map(student=>
                <tr>
                    <td>{student.student_id}</td>
                    <td>{student.name}</td>
                    <td>{student.status}</td>
                    <td><Link to={`/teacher/studentDetails/${student.id}`}><button className="btn btn-success">STUDENT DETAILS</button></Link></td>
                </tr>
                )
                }
        </tbody>
        </table>
        </div>
    );
}