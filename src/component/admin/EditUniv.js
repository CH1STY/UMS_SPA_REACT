import {useParams} from 'react-router-dom';
import {useState} from 'react';
import {useFetch} from '../FetchFromPost';
import {useHistory} from 'react-router-dom';


export const EditUniv= ()=>{
    let history = useHistory();
    const {id:univId} = useParams();
    var fetchUnivUrl = "http://localhost/ForReact/public/api/fetchUniversity/"+univId;
    var univ = useFetch(fetchUnivUrl).users;

    const [newUser, setNewUser] = useState({
        name:'',
        address:'',
    })

    

    const changeUser = (e)=>{
        const attar = e.target.name;
        const value = e.target.value;
        const user = {...newUser, [attar] : value}; 
        setNewUser(user);
    }

    const FormSubmit = (e)=>{
        var url="http://localhost/ForReact/public/api/editUniv/"+univId;
        var valid = true;
        e.preventDefault();
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
                var addressError="";
                if(errors !==undefined)
                {
                    if(errors.name !==undefined)
                    {
                    nameError = errors.name;
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
                    alert(nameError+"\n"+addressError);
                }
                else
                {
                    alert(resp);
                    history.go(0);
                }
              })
              
          })

       

          
    }

    
    

    return (
        <div className="container">
            <h2 align="center">Details of University with ID: {univId} </h2>

            <form onSubmit={FormSubmit}>
            <table className="table FormTable">  
                <tr>
                    <td class="labelT">Name:</td>
                    <td>{univ.name}</td>
                    <td class="labelT">New Name:</td>
                    <td><input onChange={changeUser} class="inputF" type="text" name="name" value={newUser.name}  /></td>
                </tr>
                <tr>
                    <td class="labelT">University ID:</td>
                    <td colSpan="2">{univ.university_id}</td>
                </tr>
                <tr>
                    <td class="labelT">Admin ID:</td>
                    <td colSpan="2">{univ.admin_id}</td>
                </tr>
                <tr>
                    <td class="labelT">Address:</td>
                    <td>{univ.address}</td>
                    <td class="labelT">New Address:</td>
                    <td><input onChange={changeUser} class="inputF" type="text" name="address"  value={newUser.address} /></td>
                    </tr>

                    <tr>
                    <td class="labelT">Creation Date:</td>
                    <td colSpan="2">{univ.created_at}</td>

                </tr>

                </table> 
                <div class="buttonDiv">
                    <button class="btn btn-primary" type="submit">Update</button>
                </div> 
            </form>

        </div>
    );
}