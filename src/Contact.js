import React from "react";
import "./Contact.css";

export default function Contact() {
    return (

    <div className="Contact">
      
      <button>
        <a href="mailto:becca.early@outlook.com?subject=A Better Understanding Price Guide Request" 
        title="Email Becca Early to request a price guide for A Better Understanding" 
        className="contact-email">
            Request A Price Guide<span className="contact-icon"><i className="fa-regular fa-paper-plane"></i></span></a></button>
    
      </div>)
        ;
}