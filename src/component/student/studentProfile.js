import {useFetch} from '../FetchFromPost';
import {Link} from 'react-router-dom';

export const StudentProfile=()=>{
    console.log(localStorage.getItem('studentId'));
    var url = "http://localhost/ForReact/public/api/student?studentId="+localStorage.getItem('studentId');
    var curl = "http://localhost/ForReact/public/api/studentProfile?studentId="+localStorage.getItem('studentId');
    const userData = useFetch(url).users;
    
    var imgSrc;
    if(userData.profile_pic===null)
    {
        imgSrc = "http://localhost/atpProject/public/images/dummy.png";
    }
    else
    {
        imgSrc = "http://localhost/atpProject/public/"+userData.profile_pic;
    }
    let studentProfile = useFetch(curl).users;
    return(
        <div className="container">
           
<form>

     <table className="table formTable">
        <tr>
            <td colspan="1"> 
                <img className="profileImage" src ={imgSrc} alt=""></img>
            </td>

         </tr>
         <tr>
             <td className="labelT">Name:</td>
             <td>{userData.name}</td>
            </tr>
            {studentProfile.map(std=>
            <tr>
             <td className="labelT">Department:</td>
             <td>{std.name}</td>
            </tr>
            )}
            <tr>
                <td className="labelT">Email:</td>
                <td>{userData.email}</td>
            </tr>
            <tr>
                <td className="labelT">Phone:</td>
                <td>{userData.phone}</td>
            </tr>
            <tr>
             <td className="labelT">Student ID:</td>
             <td>{userData.student_id}</td>
         </tr>
         <tr>
             <td className="labelT">Address:</td>
             <td>{userData.address}</td>
            </tr>
            <tr>
                <td className="labelT">Cgpa:</td>
                <td>{userData.CGPA}</td>
            </tr>
            <tr>
                <td className="labelT">Birth Date:</td>
                <td>{userData.birthdate}</td>
            </tr>
            <tr>
                <td className="labelT">Admission Date:</td>
                <td>{userData.admission_date}</td>
            </tr>
            <tr>
                <td className="labelT">Credits Completed:</td>
                <td>{userData.credits_completed}</td>
            </tr>
     </table>

 </form>
        </div>
    );
}