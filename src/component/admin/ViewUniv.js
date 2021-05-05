
import {useFetch} from '../FetchFromPost';
import {Link} from 'react-router-dom';


    
export const ViewUniv = ()=>{

    var univUrl = "http://localhost/ForReact/public/api/fetchUniversityTable";
    var universities = useFetch(univUrl).users;
    
    return(

        <div className="container">
            <h1 align="center">University List</h1>\
            <table className="table tableCustom">
        <thead>
            <tr>
                

                <th className="sorting" data-sorting_type="asc"  data-column_name="name" >Name </th>
                <th className="sorting" data-sorting_type="asc"  data-column_name="university_id" >Univeristy Id </th>
                <th className="sorting" data-sorting_type="asc"  data-column_name="address" >Address </th>
                <th className="sorting" data-sorting_type="asc"  data-column_name="admin_id" >Admin Id </th>
                <th className="sorting" data-sorting_type="asc"  data-column_name="updated_at" >Last Updated </th>
                
                
                <th className="actionsTab" colspan="2">Actions</th>
            </tr>
        </thead>

        <tbody>
            {
                universities.map(university=>
                    <tr>

                        <td key={university.id}>{university.name}</td>
                        <td key={university.id}>{university.university_id}</td>
                        <td key={university.id}>{university.address}</td>
                        <td key={university.id}>{university.admin_id}</td>
                        <td key={university.id}>{university.updated_at.substr(0,10)}</td>
                        <td>
                            <Link to={`editUniv/${university.id}`}><button class="btn btn-primary">Edit</button></Link>
                        </td>
                        <td>
                            <Link to={`editUniv/${university.id}`}><button class="btn btn-info">View</button></Link>
                        </td>
                    </tr>
                    )
            }
        </tbody>
       
               
        
    </table>
        </div>
    );
}