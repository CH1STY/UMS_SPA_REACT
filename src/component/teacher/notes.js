import {React,useState} from 'react';
import {useFetch} from '../FetchFromPost';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useHistory } from 'react-router';

export const Note = () => {
    var history =  useHistory();
    var nourl = "http://localhost/ForReact/public/api/fetchTeacherNote";
    let notelist = useFetch(nourl).users;

    const [note, setNote] = useState({});
    const onUpload = (e)=>{
        setNote(e.target.files[0]);
    };
    const formsubmit = (e)=>{
        e.preventDefault();
        var data = new FormData();
        data.append("notefile",note);
        data.append("teacherId",localStorage.getItem('teacherId'));
        const postdata = async ()=>{
            const response = await axios.post(nourl,data);
            console.log(response.data);
            if(response.data.toString()==='okay')
            {
                alert('file Uploaded');
                history.go(0);
            }
            else alert('file upload failed');
        }
        postdata();
    };
    const download=(details)=>{
        window.open(details);
    }
    const deleteNote=(noteId)=>{
        var deletenote = "http://localhost/ForReact/public/api/deleteTeacherNote/"+noteId;
        const deletedata = async ()=>{
            const response = await axios.get(deletenote);
            console.log(response.data);
            history.go(0);
        }
        deletedata();
    }
  return (
    <div className='container'>
        <form onSubmit={formsubmit}>
        <div className="row">
          <div className="col-md-6">
          <br/>
              <input type="file" name="file" onChange={onUpload} className="form-control"/>
          </div>

          <div className="upbtn">
              <button type="submit" className="btn btn-success">Upload</button>
          </div>
    </div>
    <br/>
    <table align="center" className="table table-condensed table-hover ">
        <thead className="thead-dark" align="center">
            <th scope="col">NOTE ID</th>
            <th scope="col">VIEW NOTE</th>
        </thead>
        <tbody>
            {notelist.map(note=>
                <tr>
                    <td>{note.note_id}</td>
                    <td><button onClick={()=>download(note.details)} className="btn btn-success">Download</button>
                    <button onClick={()=>deleteNote(note.id)} className="btn btn-danger">Delete</button></td>
                </tr>
                )
                }
        </tbody>
      </table>
      </form>
      </div>
  );
};

