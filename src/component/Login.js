import {Redirect, useHistory} from 'react-router-dom';

import {useState,useEffect} from 'react';

export  const  Login = () =>{


  


    const [newUser, setNewUser] = useState({
      username: '',
      password: '',
    });
    
    const [datas,setData] = useState();

  
    const changeUser = (e)=>{
      const attar = e.target.name;
      const value = e.target.value;
      const user = {...newUser, [attar] : value}; 
      setNewUser(user);
    }
  
    const FormSubmit=(e)=>{
      e.preventDefault();
      var url="http://localhost/ForReact/public/api/login";
      
      const getUserlist = async ()=>{
        const response = await fetch(url,{
            method:'post',
            body:JSON.stringify(newUser),
            hearders:{
                'Accept':'application/json',
                'Content-type':'application/json',
            }
        })
       
        
        setData(await response.json());
        
       
        console.log(datas); 
        
        
        
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