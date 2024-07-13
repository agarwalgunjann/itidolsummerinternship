import React from 'react'
import Heading from './Heading/Heading'
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import Datatable from './Datatable/Datatable'

const Deals = () => {
  const tablestruct = [{id:1, col1:"Name", col2:"Phone",col3:"Email",col4:"Company",col5:"Status"}];
  const events = [
    {id: 1, name: "Tara Foster", phone: "666-777-8889", email: "tara.foster@example.com", company: "Foster Solutions", status: "New"},
    {id: 2, name: "Ulysses Ford", phone: "777-888-9990", email: "ulysses.ford@example.com", company: "Ford Technologies", status: "Lost"},
    {id: 3, name: "Vera James", phone: "888-999-0001", email: "vera.james@example.com", company: "James & Co.", status: "Working"},
    {id: 4, name: "Walter Lewis", phone: "999-000-1112", email: "walter.lewis@example.com", company: "Lewis Enterprises", status: "Contracted"},
    {id: 5, name: "Xena Ward", phone: "000-111-2223", email: "xena.ward@example.com", company: "Ward Industries", status: "Client"}
  ];
  return (
    <>
      <Heading title="Deals" icon={<RiMoneyDollarCircleLine size="23px" className='icon' />} add="Add Deal"/>
      <Datatable events={events} tablestruct={tablestruct}/>
    </>
  )
}

export default Deals
