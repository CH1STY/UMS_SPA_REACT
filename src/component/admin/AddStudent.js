import {useState} from 'react';
import {useFetch} from '../FetchFromPost';


export const AddStudent = ()=>{

  
  
  var univUrl = "http://localhost/ForReact/public/api/fetchUniversityTable";
  var universities = useFetch(univUrl).users;
  var depUrl = "http://localhost/ForReact/public/api/fetchDepartmentTable";
  var departments = useFetch(depUrl).users;

    const [newUser, setNewUser] = useState({
        name: '',
        username:'',
        phone:'',
        email:'',
        password: '',
        password_confirmation:'',
        address:'',
        birthdate:'',
        university_id:'',
        department_id:'',
        admission_date:'',
        adminId:localStorage.getItem('adminId'),
      });

    const changeUser = (e)=>{
        const attar = e.target.name;
        const value = e.target.value;
        const user = {...newUser, [attar] : value}; 
        setNewUser(user);
      }

    const FormSubmit = (e) =>{
        e.preventDefault();

        var url="http://localhost/ForReact/public/api/addStudent";
      




      const addUser =()=>{
        var valid = true;
        fetch(url,{
          method:'post',
          body:JSON.stringify(newUser),
          headers:{
            'Accept':'apllication/json',
            'Content-Type':'apllication/json',
          }
        }).then(function(response){
          response.json().then(function(resp){
              
              var errors = resp.errors;
              var nameError="";
              var userNameError="";
              var phoneError="";
              var emailError="";
              var passwordError="";
              var addressError="";
              var birthdateError="";
              var univeristyError="";
              var addmissionDateError ="";
              var departmentError="";
            
              if(errors !==undefined)
              {

                  if(errors.name !==undefined)
                  {
                    nameError = errors.name;
                    valid = false;
                  }
                  if(errors.email !==undefined)
                  {
                    emailError = errors.email;
                    valid = false;
                  }
                  if(errors.username !==undefined)
                  {
                    userNameError = errors.username;
                    valid = false;
                  }
                  if(errors.phone !==undefined)
                  {
                    phoneError = errors.phone;
                    valid = false;
                    
                  }
                  if(errors.password !==undefined)
                  {
                    passwordError = errors.password;
                    valid = false;
                    
                  }
                  if(errors.address !==undefined)
                  {
                    addressError = errors.address;
                    valid = false;
                    
                  }
                  if(errors.birthdate !==undefined)
                  {
                    birthdateError = errors.birthdate;
                    valid = false;
                    
                  }
                  
                  if(errors.university_id !==undefined)
                  {
                    univeristyError = errors.university_id;
                    valid = false;
                    
                  }

                  if(errors.department_id !==undefined)
                  {
                    departmentError = errors.department_id;
                    valid=false;
                  }
                  if(errors.admission_date !==undefined)
                  {
                    addmissionDateError = errors.admission_date;
                    valid=false;
                  }
              }

              if(!valid)
              {
                  
                  alert(nameError+"\n"+userNameError+"\n"+phoneError+"\n"+passwordError+"\n"+addressError+"\n"+emailError+"\n"+birthdateError+"\n"+univeristyError+"\n"+departmentError+"\n"+addmissionDateError);
              }
              else
              {
                  alert(resp);
                  setNewUser({
                    name: '',
                    username:'',
                    phone:'',
                    email:'',
                    password: '',
                    password_confirmation:'',
                    address:'',
                    birthdate:'',
                    university_id:'',
                    department_id:'',
                    admission_date:'',
                    adminId:localStorage.getItem('adminId'),
                  });
              }




          })
        });
        
      }

      addUser();



    }

    
    return (
        <div className="container">      
            <h1 align="center">Student Registration Page</h1>
            <form onSubmit={FormSubmit}> 
                
                <table className="table formTable">
                    <tbody>
                    <tr>
                        <td className="labelT">Name:</td>
                        <td><input className="inputF" type="text" name="name" value={newUser.name}  onChange={changeUser}/></td>
                    </tr>
                    <tr>
                        <td className="labelT">Username:</td>
                        <td><input className="inputF" type="text" name="username" value={newUser.username} onChange={changeUser}/></td>
                    </tr>
                    <tr>
                        <td className="labelT">Phone:</td>
                        <td><input className="inputF" type="text" name="phone" value={newUser.phone} onChange={changeUser}/></td>
                    </tr>
                    <tr>
                        <td className="labelT">Email:</td>
                        <td><input className="inputF" type="email" name="email" value={newUser.email} onChange={changeUser}/></td>
                    </tr>
                    <tr>
                        <td className="labelT">Password:</td>
                        <td><input className="inputF" type="password" name="password" value={newUser.password} onChange={changeUser}/></td>
                    </tr>
                    <tr>
                        <td className="labelT">Confirm Password:</td>
                        <td><input className="inputF" type="password" name="password_confirmation" value={newUser.password_confirmation} onChange={changeUser}/></td>
                    </tr>
                    <tr>
                        <td className="labelT">Address:</td>
                        <td><input className="inputF" type="text" name="address" value={newUser.address} onChange={changeUser} /></td>
                    </tr>
                    <tr>
                        <td className="labelT">Date of Birth:</td>
                        <td><input className="inputF" type="date" name="birthdate" value={newUser.birthdate} onChange={changeUser} /></td>
                    </tr>
                    <tr>
                        <td className="labelT">Admission Date:</td>
                        <td><input className="inputF" type="date" name="admission_date" value={newUser.admission_date} onChange={changeUser} /></td>
                    </tr>
                    <tr>
                        <td className="labelT">University:</td>
                        <select value={newUser.university_id} className="form-select" name="university_id" onChange={changeUser} >
                         <option value="">Select University</option>
                         {
                           universities.map(university=>
                              <option value={university.university_id}>{university.name}</option>
                            )
                         }
                        </select>
                        
                    </tr>
                    <tr>
                        <td className="labelT">Department:</td>
                        <select value={newUser.department_id} className="form-select" name="department_id" onChange={changeUser} >
                         <option value="">Select Department</option>
                         {
                           departments.map(department=>
                              <option value={department.department_id}>{department.name}</option>
                            )
                         }
                        </select>
                        
                    </tr>
                    </tbody>
                </table>

                <div className="buttonDiv">
                    <button className="btn btn-primary" type="submit">Register </button>
                </div> 
            </form>
        </div>
    
    );
} 