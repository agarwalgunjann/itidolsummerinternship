import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Leads from './components/Leads'
import Dashboard from './components/Dashboard'
import Companies from './components/Companies'
import Contacts from './components/Contacts'
import Deals from './components/Deals'
import Followup from './components/Followup'
import Clients from './components/Clients'


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/leads" element={<Leads />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/deals" element={<Deals />} />
        <Route path="/followup" element={<Followup />} />
        <Route path="/clients" element={<Clients />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
