import {useFetch} from '../FetchFromPost';
import {Link} from 'react-router-dom';

export const GradeCourseList=()=>{
    console.log(localStorage.getItem('studentId'));
    var curl = "http://localhost/ForReact/public/api/fetchCourseGrade?studentId=" + localStorage.getItem('studentId');
    let gradeCourselist = useFetch(curl).users;
    return(
        <div className="container">
            <h1 align="center">Course With Marks</h1>
      <br/><br/>
      <table className="table stripped">
        <thead>
            <tr>
            <th scope="col">Course Name</th>
            <th scope="col">Course Id</th>
            <th scope="col">Marks</th>
            <th scope="col">Status</th>
            </tr>
        </thead>
        <tbody>
            {gradeCourselist.map(data=>
                <tr>
                    <td>{data.cname}</td>
                    <td>{data.cid}</td>
                    <td>{data.cmarks}</td>
                    <td>{data.cstatus}</td>
                </tr>
                )
                }
        </tbody>
        </table>
        </div>
    );
}