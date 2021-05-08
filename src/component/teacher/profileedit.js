import {useState,useEffect} from 'react';
import {useFetch} from '../FetchFromPost';
import {useHistory} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

export const ProfileEdit=()=>{
    let history = useHistory();
    var tpurl = "http://localhost/ForReact/public/api/teacher/profile?teacherId=" + localStorage.getItem('teacherId');
    var profile = useFetch(tpurl).users;
    const [userinfo,setUserInfo] = useState({
        name:'',
        email:'',
        phone:'',
        address:''
    });
    useEffect(async () => {
        axios
        .get(tpurl)
        .then((response) => {
            console.log(response);
            setUserInfo({
                name:response.data.name,
                email:response.data.email,
                phone:response.data.phone,
                address:response.data.address
            });
        }).catch((err) => {
        });
    },[])
    const changeUser = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        const user = {...userinfo, [name] : value}; 
        setUserInfo(user);
      }

      const FormSubmit = (e) =>{
        e.preventDefault();

        var url="http://localhost/ForReact/public/api/teacher/profile/edit/"+localStorage.getItem('teacherId');

      const addUser =()=>{
        var valid = true;
        fetch(url,{
          method:'post',
          body:JSON.stringify(userinfo),
          headers:{
            'Accept':'apllication/json',
            'Content-Type':'apllication/json',
          }
        }).then(function(response){
          response.json().then(function(resp){
              
              var errors = resp.errors;
              var nameError="";
              var phoneError="";
              var emailError="";
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
                 
                  if(errors.phone !==undefined)
                  {
                    phoneError = errors.phone;
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
                  
                  alert(nameError+"\n"+phoneError+"\n"+addressError+"\n"+emailError);
              }
              else
              {
                alert(resp);
                 history.push('/teacher/profile');
              }
          })
        });
        
      }

      addUser();
    }
    return(
        <div className='container'>
            <form onSubmit={FormSubmit}>

            <table className="table stripped">
        <thead>
            <tr>
            <th scope="col">NAME</th>
            <th><input type="text" name="name" defaultValue={profile.name} onChange={changeUser} /></th>
            </tr>
            <tr>
            <th scope="col">USERNAME</th>
            <td>{profile.username}</td>
            </tr>
            <tr>
            <th scope="col">ID</th>
            <td>{profile.teacher_id}</td>
            </tr>
            <tr>
            <th scope="col">EMAIL</th>
            <td><input type="text" name="email" defaultValue={profile.email} onChange={changeUser}/></td>
            </tr>
            <tr>
            <th scope="col">PHONE</th>
            <td><input type="text" name="phone" defaultValue={profile.phone} onChange={changeUser}/></td>
            </tr>
            <tr>
            <th scope="col">BIRTHDATE</th>
            <td>{profile.birthdate}</td>
            </tr>
            <tr>
            <th scope="col">STATUS</th>
            <td>{profile.status}</td>
            </tr>
            <tr>
            <th scope="col">ADDRESS</th>
            <td><input type="text" name="address" defaultValue={profile.address} onChange={changeUser}/></td>
            </tr>
            <tr>
            <th scope="col">JOIN DATE</th>
            <td>{profile.created_at}</td>
            </tr>
           <tr>
               <td><button className="btn btn-success">Update</button></td>
           </tr>
        </thead>
        </table>
            </form>
        </div>
    );
}