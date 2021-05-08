import {useFetch} from '../FetchFromPost';
import {Link} from 'react-router-dom';

export const StudentCourseList=()=>{
    console.log(localStorage.getItem('studentId'));
    var curl = "http://localhost/ForReact/public/api/fetchAllCourse?studentId=" + localStorage.getItem('studentId');
    let courselist = useFetch(curl).users;
    return(
        <div className="container">
            <h1 align="center">All Courses</h1>
      <br/><br/>
      <table className="table stripped">
        <thead>
            <tr>
            <th scope="col">Course Name</th>
            <th scope="col">Course Id</th>
            <th scope="col">Course Pre-Requisite</th>
            </tr>
        </thead>
        <tbody>
            {courselist.map(data=>
                <tr>
                    <td>{data.name}</td>
                    <td>{data.course_id}</td>
                    <td>{data.prerequisite}</td>
                </tr>
                )
                }
        </tbody>
        </table>
        </div>
    );
}