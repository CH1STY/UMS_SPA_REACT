import {useState} from 'react';



export const AddAdmin = ()=>{


    const [errorMsg,setErrorMsg] = useState({
        nameError : '',
        phoneError : '',
        userNameError : '',
        passwordError : '',
        email : '',
    });

    const buttonPressed = ()=>{

        var json = {
            nameError :"jhonson",
        };

        setErrorMsg(json);

        
    }


    const FormSubmit = (e) =>{
        e.preventDefault();
    }

    const valueChanged = (e)=>{

    }

    return (
        <div className="container">      
            <h1 align="center">Admin Registration Page</h1>
            <form onSubmit={FormSubmit}> 
                
                <table className="table formTable">
                    <tbody>
                    <tr>
                        <td className="labelT">Name:</td>
                        <td><input className="inputF" type="text" name="name" value=""  onChange={valueChanged}/></td>
                    </tr>
                    <tr>
                        <td className="labelT">Username:</td>
                        <td><input className="inputF" type="text" name="username" value="" onChange={valueChanged}/></td>
                    </tr>
                    <tr>
                        <td className="labelT">Phone:</td>
                        <td><input className="inputF" type="text" name="phone" value="" onChange={valueChanged}/></td>
                    </tr>
                    <tr>
                        <td className="labelT">Email:</td>
                        <td><input className="inputF" type="email" name="email" value="" onChange={valueChanged}/></td>
                    </tr>
                    <tr>
                        <td className="labelT">Password:</td>
                        <td><input className="inputF" type="password" name="password" onChange={valueChanged}/></td>
                    </tr>
                    <tr>
                        <td className="labelT">Confirm Password:</td>
                        <td><input className="inputF" type="password" name="password_confirmation" onChange={valueChanged}/></td>
                    </tr>
                    <tr>
                        <td className="labelT">Address:</td>
                        <td><input className="inputF" type="text" name="address" value="" onChange={valueChanged} /></td>
                    </tr>
                    </tbody>
                </table>

                <div className="buttonDiv">
                    <button className="btn btn-primary" onClick={buttonPressed} type="submit">Register </button>
                </div> 
            </form>
        </div>
    
    );
} 