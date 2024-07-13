import React from 'react'
import Heading from './Heading/Heading'
import { TfiBag } from "react-icons/tfi";
import Datatable from './Datatable/Datatable'

const Companies = () => {
  const tablestruct = [{id:1, col1:"Name", col2:"Phone",col3:"Email",col4:"Company",col5:"Status"}];
  const events = [
    {id: 1 , name: "Charles Brown", phone: "345-678-9012", email: "charles.brown@example.com", company: "Finance Corp", status: "Working"},
    {id: 2 , name: "Diana Prince", phone: "456-789-0123", email: "diana.prince@example.com", company: "Healthcare Partners", status: "Contracted"},
    {id: 3 , name: "Edward King", phone: "567-890-1234", email: "edward.king@example.com", company: "Logistics Ltd", status: "Client"},
    {id: 4 , name: "Fiona Scott", phone: "678-901-2345", email: "fiona.scott@example.com", company: "Marketing Pro", status: "New"},
    {id: 5 , name: "George Hill", phone: "789-012-3456", email: "george.hill@example.com", company: "Consulting Group", status: "Lost"},
    {id: 6 , name: "Hannah Lee", phone: "890-123-4567", email: "hannah.lee@example.com", company: "IT Services", status: "Working"},
    {id: 7 , name: "Isaac Green", phone: "901-234-5678", email: "isaac.green@example.com", company: "Real Estate Co", status: "Contracted"},
    {id: 8 , name: "Julia White", phone: "012-345-6789", email: "julia.white@example.com", company: "Retailers United", status: "Client"}
  ];
  return (
    <>
      <Heading title="Companies" icon={<TfiBag size="23px" className='icon' />} add="Add Company"/>
      <Datatable events={events} tablestruct={tablestruct}/>
    </>
  )
}

export default Companies
