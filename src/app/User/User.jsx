import React from 'react';
import Users from '../../json/User.json'
import GenericTableAdmin from "../../components/GenericTableAdmin/GenericTableAdmin"

const User = () => {
    const columnName = ["Name", "Fullname", "Password", "Admin"]

    const adminUsers = () => {
        Users.map(user => (
            if(user.admin===1)
        ))
    }

    return (    
        <div className='Users'>
            <div>
                <GenericTableAdmin 
                    columns={columnName} 
                    content={Users} 
                    title={"Names Users"}/>
            </div>
        </div>
            
    );
  }
  
  export default User;