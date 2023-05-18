import React from 'react';

import "./Championships.css"

import Categories from "../../json/Categories.json"
import GenericTableAdmin from "../commonComponents/GenericTableAdmin/GenericTableAdmin"
import GenericTable from "../commonComponents/GenericTable/GenericTable"

const Championships = () => {
    const columnName = ["Category"]

    return (
        <div className='championships'>
            <div>
                <GenericTable 
                    columns={columnName} 
                    content={Categories} 
                    title={"Championships"}/>
            </div>

            <div>
                <GenericTableAdmin 
                    columns={columnName} 
                    content={Categories} 
                    title={"Championships"}/>
            </div>
        </div>
    )
}

export default Championships