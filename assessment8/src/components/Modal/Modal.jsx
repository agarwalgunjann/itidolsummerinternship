import React, { useState } from 'react';
import './Modal.css';
import { TiUserAdd } from "react-icons/ti"
import minion from './minion.png'
import { FiUploadCloud } from "react-icons/fi";

const Modal = ({ show, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    profile: null,
    firstname: '',
    lastname: '',
    email: '',
    poc: '',
    phone: '',
    companyname: '',
    comlinkedin: '',
    empno: '',
    caddress: '',
    primary: 'No',
    leadstatus: '',
    leadindustry: '',
    leadsources: '',
    designation: '',
    websiteurl: '',
    note: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value, files } = e.target;
    setErrors(prevErrors => ({ ...prevErrors, [id]: '' }));
    setFormData(prevState => ({
      ...prevState,
      [id]: files ? files[0] : value
    }));
  };

  const emailPattern = new RegExp(
    /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
  );

  const phonePattern = /^[0-9]+$/;

  const validate = () => {
    let errors = {};
    if (!formData.firstname) {
      errors.firstname = "First Name is Required";
    }
    if (!formData.lastname) {
      errors.lastname = "Last Name is Required";
    }
    if (!formData.email) {
      errors.email = "Email is Required";
    } else if (!emailPattern.test(formData.email)) {
      errors.email = "Please enter a valid Email address";
    }
    if (!formData.phone) {
      errors.phone = "Phone Number is Required";
    } else if (!phonePattern.test(formData.phone)) {
      errors.phone = "Phone Number must contain only digits";
    }
  
    
    console.log("Current Errors: ", errors)
    setErrors(errors);
    return Object.keys(errors).length === 0; // Return true if no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log(formData);
      onSubmit({
        name: `${formData.firstname} ${formData.lastname}`,
        phone: formData.phone,
        email: formData.email,
        company: formData.companyname,
        status: formData.leadstatus,
      });
    }
  };

  if (!show) {
    return null;
  }

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <TiUserAdd size="23px" className='icon'/>
          <h4 className="modal-title">Create Leads</h4>
        </div>
        <form onSubmit={handleSubmit}>
        <div className="modal-body">
          <h4>Personal Details</h4>
          <div className='personal-d'>
            <div className='personal-d-le'>
              <label htmlFor="profile"><img src={minion} alt="Profile"/></label>
              <input type="file" id="profile" onChange={handleChange}/>
            </div>
            <div className='personal-d-ri'>
              <h5>Profile Picture</h5>
              <h6>PNG,JPG up to 5MB</h6>
              <p><FiUploadCloud color="red" size="15px"/><span>Upload</span></p>
            </div>
          </div>
          <div className='detail'>
            <div className='detail-le'>
              <label htmlFor="firstname">First Name</label>
              <input type="text" id="firstname" placeholder="Enter your First name" onChange={handleChange} required/>
              {errors.firstname && <span className="error">{errors.firstname}</span>}
            </div>
            <div className='detail-ri'>
              <label htmlFor="lastname">Last Name</label>
              <input type="text" id="lastname" placeholder="Enter your Last name" onChange={handleChange} required/>
              {errors.lastname && <span className="error">{errors.lastname}</span>}
            </div>
          </div>
          <h4>Contact Details</h4>
          <div className='contact-d'>
            <div className='detail-full'>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder='Enter your email' onChange={handleChange} required />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>
            <div className='detail'>
              <div className='detail-le'>
                <label htmlFor="poc">POC LinkedIn</label>
                <input type="text" id="poc" placeholder='Enter Link'onChange={handleChange}/>
              </div>
              <div className='detail-ri'>
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" placeholder='Enter your phone number' onChange={handleChange} required/>
                {errors.phone && <span className="error">{errors.phone}</span>}
              </div>
            </div>
          </div>
          <h4>Company Details</h4>
          <div className='company-d'>
            <div className='detail-full'>
              <label htmlFor="companyname">Company Name</label>
              <input type="text" id="companyname" placeholder='Enter your company name' onChange={handleChange} required/>
            </div>
            <div className='detail'>
              <div className='detail-le'>
                <label htmlFor="comlinkedin">Company LinkedIn</label>
                <input type="text" id="comlinkedin" placeholder='Enter your company name' onChange={handleChange}/>
              </div>
              <div className='detail-ri'>
                <label htmlFor="empno">Number of Employees</label>
                <input type="text" id="empno" placeholder='Enter number' onChange={handleChange}/>
              </div>
            </div>
            <div className='detail-full'>
              <label htmlFor="caddress">Street</label>
              <textarea id="caddress" placeholder='Enter Company Addess' onChange={handleChange}></textarea>
            </div>
          </div>
          <h4>Other Details</h4>
          <div className='other-d'>
            <div className='detail'>
              <div className='detail-le'>
                <label htmlFor="primary">Mark As Primary</label>
                <select id="primary" onChange={handleChange}>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
              <div className='detail-ri'>
                <label htmlFor="leadstatus">Lead Status</label>
                <select id="leadstatus" onChange={handleChange} required>
                  <option value="">Select Status</option>
                  <option value="New">New</option>
                  <option value="Lost">Lost</option>
                  <option value="Working">Working</option>
                  <option value="Contracted">Contracted</option>
                  <option value="Client">Client</option>
                </select>
              </div>
            </div>
            <div className='detail'>
              <div className='detail-le'>
                <label htmlFor="leadindustry">Lead Industry</label>
                <select id="leadindustry" onChange={handleChange}>
                  <option value="">Select Industry</option>
                  <option value="">Industry 1</option>
                  <option value="">Industry 2</option>
                  <option value="">Industry 3</option>
                  <option value="">Industry 4</option>
                  <option value="">Industry 5</option>
                </select>
              </div>
              <div className='detail-ri'>
                <label htmlFor="leadsources">Lead Sources</label>
                <select id="leadsources" onChange={handleChange}>
                  <option value="">Select Source</option>
                  <option value="">Source 1</option>
                  <option value="">Source 2</option>
                  <option value="">Source 3</option>
                  <option value="">Source 4</option>
                </select>
              </div>
            </div>
            <div className='detail'>
              <div className='detail-le'>
                <label htmlFor="designation">Designation</label>
                <input type="text" id="designation" placeholder='Enter your Designation' onChange={handleChange}/>
              </div>
              <div className='detail-ri'>
                <label htmlFor="websiteurl">Website</label>
                <input type="text" id="websiteurl" placeholder='Enter Your URL' onChange={handleChange}/>
              </div>
            </div>
          </div>
          <div className='detail-full'>
            <label htmlFor="note">Note</label>
            <textarea id="note" placeholder='Enter discription for your Lead' onChange={handleChange}></textarea>
          </div>
        </div>
        <div className="modal-footer">
          <button onClick={onClose} className="button">Cancel</button>
          <button type='submit' className="button">Create</button>
        </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;