import React, { Component } from 'react';

import GenericTableAdmin from "../commonComponents/GenericTableAdmin/GenericTableAdmin"
import GenericTable from "../commonComponents/GenericTable/GenericTable"
import { connect } from 'react-redux';

class Users extends Component {
    render(){
        const columnName = ["Fullname", "Username", "Password"]

        const { users } = this.props

        return (
            <div className='Users'>
                <div>
                    <GenericTable 
                        columns={columnName} 
                        content={users} 
                        title={"Users"}/>
                </div>

                <div>
                    <GenericTableAdmin 
                        columns={columnName} 
                        content={users} 
                        title={"Users"}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.user.users
    }
}

export default connect(mapStateToProps)(Users)