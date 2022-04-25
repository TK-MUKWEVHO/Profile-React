import React from 'react'
import "./styles.css";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  return (
    <div className='footerDiv'>
       <HiOutlineMail/><a className='footer-link' href='mailto:mukwevhotk18@gmail.com'>mukwevhotk18@gmail.com</a> 
       <FiPhoneCall/><a className='footer-link' href='tel:0635405592'>063 5405 592</a>
       
    </div>
  )
}

export default Footer