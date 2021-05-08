
import './Login.css';
import {Link,useHistory} from 'react-router-dom';
import {useState} from 'react';

export  const  Login = () =>{


  let history = useHistory();
  
  if(localStorage.getItem('userType')!==null)
  {
    if(localStorage.getItem('userType')==='admin')
    {
      history.push('/admin');
    }
    if(localStorage.getItem('userType')==='teacher')
    {
      history.push('/teacher');
    }
    if(localStorage.getItem('userType')==='student')
    {
      history.push('/student');
    }
    
  }


    const [newUser, setNewUser] = useState({
      username: '',
      password: '',
    });
    
  

  
    const changeUser = (e)=>{
      const attar = e.target.name;
      const value = e.target.value;
      const user = {...newUser, [attar] : value}; 
      setNewUser(user);
    }
  
    const FormSubmit=(e)=>{
      e.preventDefault();
      var url="http://localhost/ForReact/public/api/login";
      
      const getUserlist =()=>{
        
        fetch(url,{
          method:'post',
          body:JSON.stringify(newUser),
          headers:{
            'Accept':'apllication/json',
            'Content-Type':'apllication/json',
          }
        }).then(function(response){
          response.json().then(function(resp){
            
            if(resp.validation==="true")
            {
              if(resp.userType==="admin")
              {
                localStorage.setItem('adminId',resp.userId);
                localStorage.setItem('userType','admin');
                history.push('/admin');

              }
              if(resp.userType==='teacher')
              {
                localStorage.setItem('teacherId',resp.userId);
                localStorage.setItem('userType','teacher');
                history.push('/teacher');
              }
              if(resp.userType==='student')
              {
                localStorage.setItem('studentId',resp.userId);
                localStorage.setItem('userType','student');
                history.push('/student');
              }
            }
            else{
              alert("Invalid Username Or Password");
            }
          })
        });
        
      }

     getUserlist();

    }    

    return (
     
        <div>
          <div className="row">
            <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
              <div className="card card-signin my-5">
                <div className="card-body" >
                  <h5 className="card-title text-center">Log In</h5>
                  <form className="form-signin" onSubmit={FormSubmit}>
                    <div className="form-label-group">
                      <input type="text" id="inputUsername" className="form-control" placeholder="Username" 
                      name="username" value={newUser.username} onChange={changeUser} required autoFocus/>
                      <label htmlFor="inputUsername">Username</label>
                    </div>
      
                    <div className="form-label-group">
                      <input type="password" id="inputPassword" className="form-control" placeholder="Password" 
                      name="password" value={newUser.password} onChange={changeUser} required/>
                      <label htmlFor="inputPassword">Password</label>
                    </div>
      
                    <div className="custom-control custom-checkbox mb-3">
                      <input type="checkbox" className="custom-control-input" id="customCheck1"/>
                      <label className="custom-control-label" htmlFor="customCheck1">Remember password</label>
                    </div>
                    <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign in</button>
                    <button className="btn btn-lg btn-primary btn-block text-uppercase"><Link to="/student/studentRegistration">Student Registration</Link></button>
                    <hr className="my-4"/>
                   
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      
    )
  }
  
  
  export default Login;