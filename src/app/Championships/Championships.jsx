import React from 'react';

import "./Championships.css"

import Categories from "../../json/Categories.json"
import GenericTable from "../../components/GenericTable/GenericTable"
import GenericTableAdmin from "../../components/GenericTableAdmin/GenericTableAdmin"

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
                <GenericTableAdmin columns={columnName} content={Categories} title={"Championships"}/>
            </div>
        </div>
    )
}

export default Championships