import {useFetch} from '../FetchFromPost';
import {useState} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

export const AdminProfile = ()=>{


    var url = "http://localhost/ForReact/public/api/admin/profile/"+localStorage.getItem('adminId');
    let history = useHistory();
    var userData = useFetch(url).users;

    const [imageData,setImageData] = useState();

    var imgSrc;
    if(userData.profile_pic===null)
    {
        imgSrc = "http://localhost/ForReact/public/images/dummy.png";
    }
    else
    {
        imgSrc = "http://localhost/ForReact/public/"+userData.profile_pic;
    }

    const FormSubmit = (e) =>{
        e.preventDefault();
        let file = imageData;

        let formdata = new FormData();

        formdata.append('image',file);
        console.log(formdata);

        const fetchData = async () =>{

            const res = await axios.post(url,formdata);
    
            console.log(res.data);

            if(res.data.toString()==="okay")
            {
                alert("Profile Pic Updated");
                history.go(0);
            }
            else
            {
                alert("Update Failed");
                history.go(0);

            }


        }

        fetchData();
        
    }

    const changeImage=(e)=>{
        
        setImageData(e.target.files[0]);
    }

    return (
        <div className="container">
            <div align="center">
                <form encType="multipart/form-data" onSubmit={FormSubmit}>
                <h1>Admin Profile</h1>
                <table className="table formTable">
                    <tbody>
                        <tr>
                            <td colSpan="2"> 
                                <img src={imgSrc} className="profilePic"></img>
                                <input name="image" onChange={changeImage} type="file"></input>

                            </td>
                        </tr>

                        <tr>
                            <td className="labelT">Name:</td>
                            <td>{userData.name}</td>
                        </tr>
                        <tr>
                            <td className="labelT">Phone:</td>
                            <td>{userData.phone}</td>
                        </tr>
                        <tr>
                            <td className="labelT">Admin ID:</td>
                            <td>{userData.admin_id}</td>
                        </tr>
                        <tr>
                            <td className="labelT">Address:</td>
                            <td>{userData.address}</td>
                        </tr>
                        <tr>
                            <td className="labelT">Creation Date:</td>
                            <td>{userData.created_at}</td>
                        </tr>
                        
                           
                        
                    </tbody>
                    

                </table>
                <div className="buttonDiv">
                    <button type="submit" className="btn btn-primary">Update</button>
                </div>

            </form>
            </div>
        </div>
    );
}