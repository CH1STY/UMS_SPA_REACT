import { useHistory} from 'react-router-dom';

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
      <div align="center">
        <h1 align="center">Login Page</h1>
        <form align="center" onSubmit={FormSubmit} >	
              <label>Username</label>
                          <input type="text" name="username" value={newUser.username} onChange={changeUser}></input><br></br>
              <label>Password</label>
                          <input  type="password" name="password" value={newUser.password} onChange={changeUser}></input><br></br>                          
                          <button>
                              Login
                          </button>
                  </form>
      </div>
    )
  }
  
  
  export default Login;