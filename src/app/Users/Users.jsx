import React, { useEffect, useState } from 'react';
import GenericTableAdmin from "../commonComponents/GenericTableAdmin/GenericTableAdmin";
import GenericTable from "../commonComponents/GenericTable/GenericTable";
import { connect } from 'react-redux';
import { getUsers } from '../../controller/UserController'

const Users = () => {
  const columnName = ["Fullname", "Username", "Password"];
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    getUsers(setUsersData);
  }, []);

  return (
    <div className='Users'>
      <h3>You have {usersData.length} users</h3>
      <div>
        <GenericTable
          columns={columnName}
          content={usersData}
          title={"Users"}
        />
      </div>

      <div>
        <GenericTableAdmin
          columns={columnName}
          content={usersData}
          title={"Users"}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    usersData: state.usersData,
  };
};

export default connect(mapStateToProps)(Users);