import {useState} from 'react';


export const AddAdmin = ()=>{

  
  


    const [newUser, setNewUser] = useState({
        name: '',
        username:'',
        phone:'',
        email:'',
        password: '',
        password_confirmation:'',
        address:'',
      });

    const changeUser = (e)=>{
        const attar = e.target.name;
        const value = e.target.value;
        const user = {...newUser, [attar] : value}; 
        setNewUser(user);
      }

    const FormSubmit = (e) =>{
        e.preventDefault();

        var url="http://localhost/ForReact/public/api/addAdmin";

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
              }

              if(!valid)
              {
                  
                  alert(nameError+"\n"+userNameError+"\n"+phoneError+"\n"+passwordError+"\n"+addressError+"\n"+emailError);
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
                  });
              }




          })
        });
        
      }

      addUser();



    }

    
    return (
        <div className="container">      
            <h1 align="center">Admin Registration Page</h1>
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
                    </tbody>
                </table>

                <div className="buttonDiv">
                    <button className="btn btn-primary" type="submit">Register </button>
                </div> 
            </form>
        </div>
    
    );
} 