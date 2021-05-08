import {useFetch} from '../FetchFromPost';
import {Link} from 'react-router-dom';

export const TeacherCourseList=()=>{
    var crsurl = "http://localhost/ForReact/public/api/fetchCourse";
    let courselist = useFetch(crsurl).users;
    console.log(courselist);
    return(
        <div className="container">
      <h1 align="center">COURSES</h1>
      <br/><br/>
      <table className="table stripped">
        <thead>
            <tr>
            <th scope="col">COURSE ID</th>
            <th scope="col">COURSE NAME</th>
            <th scope="col">COURSE CREDIT</th>
            <th scope="col">CREATED AT</th>
            <th scope="col">ACTION</th>
            </tr>
            {courselist.map(course=>
                <tr>
                    <td>{course.course_id}</td>
                    <td>{course.name}</td>
                    <td>{course.credits}</td>
                    <td>{course.created_at.substr(0,10)}</td>
                    <td><Link to={`/teacher/courseDetails/${course.id}`}>
                        <button className="btn btn-success">COURSE DETAILS</button></Link></td>
                </tr>
                )
                }
        </thead>
        </table>
    </div>
    );
}