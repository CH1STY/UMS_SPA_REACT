
import {useFetch} from '../FetchFromPost';

    
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
            
        </tbody>
       
               
        
    </table>
        </div>
    );
}