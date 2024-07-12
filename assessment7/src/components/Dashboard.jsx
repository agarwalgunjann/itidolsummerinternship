import React from 'react'
import { MdOutlineDashboard } from "react-icons/md";
import Heading from "./Heading/Heading"
import Datatable from './Datatable/Datatable'

const Dashboard = () => {
  const tablestruct = [{id:1, col1:"Name", col2:"Phone",col3:"Email",col4:"Company",col5:"Status"}];
  const events = [
    {id: 1 , name: "Kevin Baker", phone: "213-456-7890", email: "kevin.baker@example.com", company: "Baker Solutions", status: "New"},
    {id: 2 , name: "Laura Parker", phone: "324-567-8901", email: "laura.parker@example.com", company: "Parker & Co.", status: "Lost"},
    {id: 3 , name: "Michael Scott", phone: "435-678-9012", email: "michael.scott@example.com", company: "Dunder Mifflin", status: "Working"},
    {id: 4 , name: "Natalie Cook", phone: "546-789-0123", email: "natalie.cook@example.com", company: "Cook Enterprises", status: "Contracted"},
    {id: 5 , name: "Oliver Stone", phone: "657-890-1234", email: "oliver.stone@example.com", company: "Stone Solutions", status: "Client"},
    {id: 6 , name: "Paula Wright", phone: "768-901-2345", email: "paula.wright@example.com", company: "Wright Marketing", status: "New"},
    {id: 7 , name: "Quentin Harris", phone: "879-012-3456", email: "quentin.harris@example.com", company: "Harris Consulting", status: "Lost"},
    {id: 8 , name: "Rebecca Lee", phone: "980-123-4567", email: "rebecca.lee@example.com", company: "Lee Technologies", status: "Working"},
    {id: 9 , name: "Samuel Turner", phone: "091-234-5678", email: "samuel.turner@example.com", company: "Turner Corp", status: "Contracted"},
    {id: 10, name: "Tina Young", phone: "102-345-6789", email: "tina.young@example.com", company: "Young Innovations", status: "Client"},
    {id: 11, name: "Ursula Hall", phone: "213-456-7891", email: "ursula.hall@example.com", company: "Hall & Associates", status: "New"},
    {id: 12, name: "Victor Clark", phone: "324-567-8902", email: "victor.clark@example.com", company: "Clark Enterprises", status: "Lost"},
    {id: 13, name: "Wendy Adams", phone: "435-678-9013", email: "wendy.adams@example.com", company: "Adams Group", status: "Working"},
    {id: 14, name: "Jannie Barnier", phone: "744-508-4665", email: "Jennie_Bernier@hotmail.com", company: "Roberts, O'ken and kilback", status: "New"},
    {id: 15, name: "Gladys Howell", phone: "880-941-6542", email: "Gladys_Howell38@hotmail.com", company: "Rosenbaum Inc", status: "Lost"},
    {id: 16, name: "Ana Dare", phone: "296-382-2550", email: "Anadare@hotmail.com", company: "Kerluke - Yundant", status: "Working"},
    {id: 17, name: "Ian Hartmann", phone: "591-263-4873", email: "Ianherman34@gmail.com", company: "Klocko - Larkin", status: "Contracted"},
    {id: 18, name: "Baleda Jackobi", phone: "789-456-5201", email: "Balenda_jacobi41@yahoo.com", company: "Daugherty LLC", status: "Client"},
    {id: 19, name: "Alex Johnson", phone: "123-456-7890", email: "alex.johnson@example.com", company: "Tech Solutions Inc", status: "New"},
    {id: 20, name: "Betty Smith", phone: "234-567-8901", email: "betty.smith@example.com", company: "Creative Agency", status: "Working"}
  ];
  return (
    <>
      <Heading title="Dashboard" icon={<MdOutlineDashboard size="23px" className='icon' />} add="Add"/>
      <Datatable events={events} tablestruct={tablestruct}/>
    </>
  )
}

export default Dashboard