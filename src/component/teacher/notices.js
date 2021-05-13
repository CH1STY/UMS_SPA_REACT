import {React,useState} from 'react';
import {useFetch} from '../FetchFromPost';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useHistory } from 'react-router';

export const Notice = () => {

  var history = useHistory();
  var neurl = "http://localhost/ForReact/public/api/fetchTeacherNotice";
  let noticelist = useFetch(neurl).users;
  
  const [notice, setNotice] = useState('');
    const onChange = (e)=>{
        setNotice(e.target.value);
    };

  const formSubmmit = (e) =>{
    e.preventDefault();
    var data = new FormData();
        data.append("notice",notice);
        data.append("teacherId",localStorage.getItem('teacherId'));
        const postdata = async ()=>{
            const response = await axios.post(neurl,data);
            console.log(response.data);
            if(response.data.toString()==='okay')
            {
                alert('Notice Uploaded');
                history.go(0);
            }
            else alert('Notice upload failed');
        }
        postdata();
  }

  const deleteNotice=(noticeId)=>{
    var deletenotice = "http://localhost/ForReact/public/api/deleteTeacherNotice/"+noticeId;
    const deletedata = async ()=>{
        const response = await axios.get(deletenotice);
        console.log(response.data);
        history.go(0);
    }
    deletedata();
  }

  return (
    <div className='container'>
      <form onSubmit={formSubmmit}>
        <div className="row" >
          <div className="col-md-6" align="center">
          <br/>
              <input type="text" name="notice" onChange={onChange} value={notice} className="form-control"/>
          <div class="col-md-6">
              <br/>
              <button type="submit" className="btn btn-success">Upload</button>
          </div>
          </div>
      </div>

    <br/>
    <table align="center" className="table table-condensed table-hover ">
        <thead className="thead-dark" align="center">
            <th scope="col">NOTICE ID</th>
            <th scope="col">VIEW NOTICE</th>
            <th scope="col">ACTION</th>
        </thead>
        <tbody>
            {noticelist.map(notice=>
                <tr>
                    <td>{notice.teacher_notice_id}</td>
                    <td>{notice.details}</td>
                    <td><button onClick={()=>deleteNotice(notice.id)} className="btn btn-danger">Delete</button></td>
                </tr>
                )
                }
        </tbody>
      </table>
    <br/>
    </form>
      </div>
  );
};


