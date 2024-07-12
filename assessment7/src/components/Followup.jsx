import React from 'react'
import Heading from './Heading/Heading'
import { FaCalendarDay } from "react-icons/fa";
import Datatable from './Datatable/Datatable'

const Followup = () => {
  const tablestruct = [{id:1, col1:"Name", col2:"Phone",col3:"Email",col4:"Company",col5:"Status"}];
  const events = [
    {id: 1, name: "Kelly Adams", phone: "777-888-9999", email: "kelly.adams@example.com", company: "Adams Enterprises", status: "Lost"},
    {id: 2, name: "Liam Nelson", phone: "888-999-0000", email: "liam.nelson@example.com", company: "Nelson Industries", status: "Working"},
    {id: 3, name: "Mia Wright", phone: "999-000-1111", email: "mia.wright@example.com", company: "Wright Technologies", status: "Contracted"},
    {id: 4, name: "Noah Harris", phone: "000-111-2222", email: "noah.harris@example.com", company: "Harris Solutions", status: "Client"},
    {id: 5, name: "Olivia Scott", phone: "111-222-3334", email: "olivia.scott@example.com", company: "Scott Innovations", status: "New"},
    {id: 6, name: "Paul Baker", phone: "222-333-4445", email: "paul.baker@example.com", company: "Baker Technologies", status: "Lost"},
    {id: 7, name: "Quincy Campbell", phone: "333-444-5556", email: "quincy.campbell@example.com", company: "Campbell Corp", status: "Working"},
    {id: 8, name: "Rachel Bell", phone: "444-555-6667", email: "rachel.bell@example.com", company: "Bell & Partners", status: "Contracted"},
    {id: 9, name: "Steven Kelly", phone: "555-666-7778", email: "steven.kelly@example.com", company: "Kelly Group", status: "Client"}
  ];
  return (
    <>
      <Heading title="Follow Up" icon={<FaCalendarDay size="23px" className='icon' />} add="Add"/>
      <Datatable events={events} tablestruct={tablestruct}/>
    </>
  )
}

export default Followup
