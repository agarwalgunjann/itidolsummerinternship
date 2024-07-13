import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
import { GiStairsGoal } from "react-icons/gi";
import { MdOutlineDashboard } from "react-icons/md";
import { TiUserAdd } from "react-icons/ti";
import { TfiBag } from "react-icons/tfi";
import { RiContactsBookFill } from "react-icons/ri";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { FaCalendarDay } from "react-icons/fa";
import { IoPeople } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import profile from './profile.jpg';

const Navbar = () => {
  return (
    <header>
      <nav className="navbar">
        <div className='nav-left'>
          <GiStairsGoal size="30px"/><span><Link to="/" className="link-cl">iSalesPilot</Link></span>
        </div>
        <div className='nav-middle'>
          <div>
            <MdOutlineDashboard size="20px"/><span><Link to="/dashboard" className="link-cl">Dashboard</Link></span>
          </div>
          <div>
            <TiUserAdd size="20px"/><span><Link to="/leads" className="link-cl">Leads</Link></span>
          </div>
          <div>
            <TfiBag size="20px"/><span><Link to="/companies" className="link-cl">Companies</Link></span>
          </div>
          <div>
            <RiContactsBookFill size="20px"/><span><Link to="/contacts" className="link-cl">Contacts</Link></span>
          </div>
          <div>
            <RiMoneyDollarCircleLine size="20px"/><span><Link to="/deals" className="link-cl">Deals</Link></span>
          </div>
          <div>
            <FaCalendarDay size="20px"/><span><Link to="/followup" className="link-cl">Follow Up</Link></span>
          </div>
          <div>
            <IoPeople size="20px"/><span><Link to="/clients" className="link-cl">Clients</Link></span>
          </div>
        </div>
        <div className='nav-right'>
          <div>
            <FaRegBell size="20px"/>
          </div>
          <div>
            <img src={profile} alt="pic"/>
            <span>Deval Rathod</span>
            <RiArrowDropDownLine size="30px"/>
          </div>
        </div>

      </nav>
    </header>
  )
}

export default Navbar
