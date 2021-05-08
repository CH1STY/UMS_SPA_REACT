import {useFetch} from '../FetchFromPost';
import {Link} from 'react-router-dom';
export const AdminDashBoard= ()=>{
    
    //const [universities,setUniversities] = useState();

    var univUrl = "http://localhost/ForReact/public/api/fetchUniversityTable";
    var universities = useFetch(univUrl).users;
    var adminUrl = "http://localhost/ForReact/public/api/fetchAdminTable";
    var admins = useFetch(adminUrl).users;
    var accountUrl = "http://localhost/ForReact/public/api/fetchAccountTable";
    var accounts = useFetch(accountUrl).users;
    var teacherUrl = "http://localhost/ForReact/public/api/fetchTeacherTable";
    var teachers = useFetch(teacherUrl).users;
    var studentUrl = "http://localhost/ForReact/public/api/fetchStudentTable";
    var students = useFetch(studentUrl).users;

    
    return (
        <div className="container">
            <h1>This is Admin DashBoard</h1>
        <table className="table tableCustom" >
                <thead>
                    <tr >
                        <th className="subTableTitle" colSpan="5" >Recently Added Universities</th>
                    </tr>
                    <tr>
                        
                        <th>Name</th>
                        <th>University ID</th>
                        <th>Address</th>
                        <th>Admin ID</th>
                        <th>Creation Time</th>
                    </tr>
                </thead>
                <tbody>
                {
                    universities.slice(0,5).map(universities=>
                        <tr key={universities.id}>
                            <td>{universities.name}</td>
                            <td>{universities.university_id}</td>
                            <td>{universities.admin_id}</td>
                            <td>{universities.address}</td>
                            <td>{universities.created_at.substr(0,10)}</td>
                        </tr>
                    )
                }
                </tbody>
                <tfoot>
                    <tr><td className="btmLink" colSpan="5"> <Link  to="/admin/ViewUniv">View|Edit Univeristy</Link> </td></tr>
                </tfoot>
    </table>
            
        <table className="table tableCustom" >
                <thead>
                    <tr >
                        <th className="subTableTitle" colSpan="5" >Recently Added Admins</th>
                    </tr>
                    <tr>
                        
                        <th>User Name</th>
                        <th>Admin Id</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Creation Time</th>
                    </tr>
                </thead>
                <tbody>
                {
                    admins.slice(0,5).map(admin=>
                        <tr>
                            <td>{admin.name}</td>
                            <td>{admin.admin_id}</td>
                            <td>{admin.email}</td>
                            <td>{admin.phone}</td>
                            <td>{admin.created_at.substr(0,10)}</td>
                        </tr>
                    )
                }
                </tbody>
                <tfoot>
                    <tr><td className="btmLink" colSpan="5"> <Link  to="/admin/ViewAdmins">View Admins</Link> </td></tr>
                </tfoot>
    </table>
            
        <table className="table tableCustom" >
                <thead>
                    <tr >
                        <th className="subTableTitle" colSpan="5" >Recently Added Accounts</th>
                    </tr>
                    <tr>
                        
                        <th>User Name</th>
                        <th>Admin Id</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Creation Time</th>
                    </tr>
                </thead>
                <tbody>
                {
                    accounts.slice(0,5).map(account=>
                        <tr>
                            <td>{account.name}</td>
                            <td>{account.admin_id}</td>
                            <td>{account.email}</td>
                            <td>{account.phone}</td>
                            <td>{account.created_at.substr(0,10)}</td>
                        </tr>
                    )
                }
                </tbody>
                <tfoot>
                    <tr><td className="btmLink" colSpan="5"> <Link  to="/admin/ViewAccounts">View|Edit Accounts</Link> </td></tr>
                </tfoot>
    </table>


        <table className="table tableCustom" >
                <thead>
                    <tr >
                        <th className="subTableTitle" colSpan="5" >Recently Added Teacher</th>
                    </tr>
                    <tr>
                        
                        <th>User Name</th>
                        <th>Admin Id</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Creation Time</th>
                    </tr>
                </thead>
                <tbody>
                {
                    teachers.slice(0,5).map(teacher=>
                        <tr>
                            <td>{teacher.name}</td>
                            <td>{teacher.admin_id}</td>
                            <td>{teacher.email}</td>
                            <td>{teacher.phone}</td>
                            <td>{teacher.created_at.substr(0,10)}</td>
                        </tr>
                    )
                }
                </tbody>
                <tfoot>
                    <tr><td className="btmLink" colSpan="5"> <Link  to="/admin/ViewTeachers">View|Edit Teacher</Link> </td></tr>
                </tfoot>
    </table>

        <table className="table tableCustom" >
                <thead>
                    <tr >
                        <th className="subTableTitle" colSpan="5" >Recently Added Students</th>
                    </tr>
                    <tr>
                        
                        <th>User Name</th>
                        <th>Admin Id</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Creation Time</th>
                    </tr>
                </thead>
                <tbody>
                {
                    students.slice(0,5).map(student=>
                        <tr>
                            <td>{student.name}</td>
                            <td>{student.admin_id}</td>
                            <td>{student.email}</td>
                            <td>{student.phone}</td>
                            <td>{student.created_at.substr(0,10)}</td>
                        </tr>
                    )
                }
                </tbody>
                <tfoot>
                    <tr><td className="btmLink" colSpan="5"> <Link  to="/admin/ViewStudents">View|Edit Students</Link> </td></tr>
                </tfoot>
    </table>
        </div>
    )
}

export default AdminDashBoard;