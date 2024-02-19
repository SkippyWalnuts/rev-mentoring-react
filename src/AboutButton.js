import React from "react";
import "./AboutButton.css";

export default function AboutButton() {
    return (

    <div className="AboutButton">
      
      <button>
        <a href="mailto:becca.early@outlook.com?subject=A Better Understanding Price Guide Request" 
        title="Email Becca Early to request a price guide for A Better Understanding" 
        className="price-guide-email">
            Request A Price Guide<span className="price-guide-icon"><i className="fa-regular fa-paper-plane"></i></span></a></button>
    
      </div>)
        ;
}