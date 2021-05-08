import {useFetch} from '../FetchFromPost';
import {Link} from 'react-router-dom';

export const DropedCourseList=()=>{
    console.log(localStorage.getItem('studentId'));
    var curl = "http://localhost/ForReact/public/api/fetchCourseDroped?studentId=" + localStorage.getItem('studentId');
    let dropedCourselist = useFetch(curl).users;
    return(
        <div className="container">
            <h1 align="center">Droped Courses</h1>
      <br/><br/>
      <table className="table stripped">
        <thead>
            <tr>
            <th scope="col">Course Name</th>
            <th scope="col">Course Id</th>
            <th scope="col">Marks</th>
            </tr>
        </thead>
        <tbody>
            {dropedCourselist.map(data=>
                <tr>
                    <td>{data.cname}</td>
                    <td>{data.cid}</td>
                    <td>{data.cmarks}</td>
                </tr>
                )
                }
        </tbody>
        </table>
        </div>
    );
}