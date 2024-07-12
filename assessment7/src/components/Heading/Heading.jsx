import React from 'react'
import './Heading.css'
import { RiArrowDropDownLine } from "react-icons/ri";
import { LuMail } from "react-icons/lu";
import { FaPlus } from "react-icons/fa6";

const Heading = ({title, icon, add}) => {
    return (
        <div className='l-body'>
            <div className='upper-body'>
                <div className='up-left'>
                    {icon}
                    <span>{title}</span>
                    <RiArrowDropDownLine size="30px"/>
                </div>
                <div className='up-right'>
                <LuMail size="23px" className='icon'/>
                <div className='right-r'>
                    <button className='right-r-1'><FaPlus /><span>{add}</span></button>
                    <button className='right-r-2'><RiArrowDropDownLine size="27px"/></button>
                </div>
            </div>
            </div>
        </div>
      )
}

export default Heading
