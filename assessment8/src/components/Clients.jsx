import React from 'react'
import Heading from './Heading/Heading'
import { IoPeople } from "react-icons/io5";
import Datatable from './Datatable/Datatable'

const Clients = () => {
  const tablestruct = [{id:1, col1:"Name", col2:"Phone",col3:"Email",col4:"Company",col5:"Status"}];
  const events = [
    {id: 1, name: "Emma Robinson", phone: "111-222-3333", email: "emma.robinson@example.com", company: "Robinson Industries", status: "New"},
    {id: 2, name: "Frank Edwards", phone: "222-333-4444", email: "frank.edwards@example.com", company: "Edwards & Partners", status: "Lost"},
    {id: 3, name: "Grace Mitchell", phone: "333-444-5555", email: "grace.mitchell@example.com", company: "Mitchell Services", status: "Working"},
    {id: 4, name: "Henry Thompson", phone: "444-555-6666", email: "henry.thompson@example.com", company: "Thompson LLC", status: "Contracted"},
    {id: 5, name: "Irene Collins", phone: "555-666-7777", email: "irene.collins@example.com", company: "Collins Group", status: "Client"},
    {id: 6, name: "Jack Morgan", phone: "666-777-8888", email: "jack.morgan@example.com", company: "Morgan & Co.", status: "New"}
  ];
  return (
    <div>
      <Heading title="Clients" icon={<IoPeople size="23px" className='icon' />} add="Add Client"/>
      <Datatable events={events} tablestruct={tablestruct}/>
    </div>
  )
}

export default Clients
