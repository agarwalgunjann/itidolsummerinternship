import React from 'react'
import Heading from './Heading/Heading'
import { RiContactsBookFill } from "react-icons/ri";
import Datatable from './Datatable/Datatable'

const Contacts = () => {
  const tablestruct = [{id:1, col1:"Name", col2:"Phone",col3:"Email",col4:"Company",col5:"Status"}];
  const events = [
    {id: 1, name: "Xander Brooks", phone: "546-789-0124", email: "xander.brooks@example.com", company: "Brooks Inc", status: "Contracted"},
    {id: 2, name: "Yvonne King", phone: "657-890-1235", email: "yvonne.king@example.com", company: "King Enterprises", status: "Client"},
    {id: 3, name: "Zachary Morris", phone: "768-901-2346", email: "zachary.morris@example.com", company: "Morris & Co.", status: "New"},
    {id: 4, name: "Allison Nelson", phone: "879-012-3457", email: "allison.nelson@example.com", company: "Nelson Enterprises", status: "Lost"},
    {id: 5, name: "Brian O'Neill", phone: "980-123-4568", email: "brian.oneill@example.com", company: "O'Neill Technologies", status: "Working"},
    {id: 6, name: "Carla Palmer", phone: "091-234-5679", email: "carla.palmer@example.com", company: "Palmer & Co.", status: "Contracted"},
    {id: 7, name: "Derek Quinn", phone: "102-345-6790", email: "derek.quinn@example.com", company: "Quinn Consulting", status: "Client"},
  ];
  return (
    <>
      <Heading title="Contacts" icon={<RiContactsBookFill size="23px" className='icon' />} add="Add Contact"/>
      <Datatable events={events} tablestruct={tablestruct}/>
    </>
  )
}

export default Contacts
