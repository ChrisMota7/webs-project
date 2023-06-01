import React, { useEffect, useState } from 'react';
import GenericTableAdmin from "../commonComponents/GenericTableAdmin/GenericTableAdmin";
import GenericTable from "../commonComponents/GenericTable/GenericTable";
import { getUsers } from '../../controller/UserController'

const Users = () => {
  const columnName = ["Fullname", "Username", "Admin"];
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    getUsers(setUsersData);
  }, []);

  return (
    <div className='Users'>
      <div>
        <GenericTable
          columns={columnName}
          content={usersData}
          title={"Users"}
          type={"users"}
        />
      </div>

      <div>
        <GenericTableAdmin
          columns={columnName}
          content={usersData}
          title={"Users"}
          type={"users"}
        />
      </div>
    </div>
  );
};

export default Users;