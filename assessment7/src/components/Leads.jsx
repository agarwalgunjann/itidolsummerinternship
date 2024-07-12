import React from 'react'
import { TiUserAdd } from "react-icons/ti"
import Heading from './Heading/Heading'
import Datatable from './Datatable/Datatable'

const Leads = () => {
  const tablestruct = [{id:1, col1:"Name", col2:"Phone",col3:"Email",col4:"Company",col5:"Status"}];
  const events = [
    {id: 1 , name: "Jannie Barnier", phone: "744-508-4665", email: "Jennie_Bernier@hotmail.com", company: "Roberts, O'ken and kilback", status: "New"},
    {id: 2 , name: "Gladys Howell", phone: "880-941-6542", email: "Gladys_Howell38@hotmail.com", company: "Rosenbaum Inc", status: "Lost"},
    {id: 3 , name: "Ana Dare", phone: "296-382-2550", email: "Anadare@hotmail.com", company: "Kerluke - Yundant", status: "Working"},
    {id: 4 , name: "Ian Hartmann", phone: "591-263-4873", email: "Ianherman34@gmail.com", company: "Klocko - Larkin", status: "Contracted"},
    {id: 5 , name: "Baleda Jackobi", phone: "789-456-5201", email: "Balenda_jacobi41@yahoo.com", company: "Daugherty LLC", status: "Client"},
    {id: 6 , name: "Alex Johnson", phone: "123-456-7890", email: "alex.johnson@example.com", company: "Tech Solutions Inc", status: "New"},
    {id: 7 , name: "Betty Smith", phone: "234-567-8901", email: "betty.smith@example.com", company: "Creative Agency", status: "Working"}
  ];

  return (
    <>
      <Heading title="Leads" icon={<TiUserAdd size="23px" className='icon' />} add="Add Lead"/>
      <Datatable events={events} tablestruct={tablestruct}/>
    </>
  )
}

export default Leads
