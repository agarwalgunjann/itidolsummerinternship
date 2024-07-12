import React, { useState } from 'react'
import './Datatable.css'
import { IoSearchSharp } from "react-icons/io5";
import { FaFilter } from "react-icons/fa";
import { FiDownloadCloud } from "react-icons/fi";
import { FiUploadCloud } from "react-icons/fi";
import { TbSortAscending } from "react-icons/tb";
import { GoDotFill } from "react-icons/go";


const Datatable = ({ events , tablestruct }) => {
    const [searchdata, setSearchdata] = useState('');

    const handleSeachChange = (event)=>{
        setSearchdata(event.target.value);
    }

    const filteredData = events.filter((item) =>
        item.name.toLowerCase().includes(searchdata.toLowerCase())
    );

    const statusColors = {
        New: 'red',
        Lost: 'grey',
        Working: 'green',
        Contracted: 'Gold',
        Client: 'blue'
    };

  return (
    <div>
      <div className='middle-body'>
            <div className="mid-b-l">
                <IoSearchSharp size="20px"/>
                <input 
                    type="text" 
                    placeholder='Search'
                    value={searchdata}
                    onChange={handleSeachChange}
                />
            </div>
            <div className="mid-b-r">
                <button><FaFilter color="red" size="15px"/><span>Filter</span></button>
                <button><FiDownloadCloud color="red" size="20px"/></button>
                <button><FiUploadCloud color="red" size="20px"/></button>
                <button><TbSortAscending color="red" size="20px"/></button>
            </div>
        </div>
        <div className='lower-body'>
            <table className='table'>
                <thead>
                    {tablestruct.map((item) => (
                        <tr>
                            <th></th>
                            <th>{item.col1}</th>
                            <th>{item.col2}</th>
                            <th>{item.col3}</th>
                            <th>{item.col4}</th>
                            <th>{item.col5}</th>
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {filteredData.map((item) => (
                        <tr key={item.id}>
                            <td class="checkbox">
                                <input type="checkbox" />
                            </td>
                            <td>{item.name}</td>
                            <td>{item.phone}</td>
                            <td>{item.email}</td>
                            <td>{item.company}</td>
                            <td style={{ color: statusColors[item.status] || 'black' }}><GoDotFill /> {item.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Datatable
