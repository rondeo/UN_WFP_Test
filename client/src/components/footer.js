import React, { Component } from "react";
import './footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="Footer-container">
        <p className="Footer-content">
        Follow the World Food Programme on:
        <br>
        </br>
        <br>
        </br>
        <a href="https://www.facebook.com/WorldFoodProgramme" target="_blank" rel="noopener noreferrer"> <i class="fab fa-facebook"></i> </a> - 
        <a href="https://twitter.com/WFP" target="_blank" rel="noopener noreferrer"> <i class="fab fa-twitter"></i> </a> - 
        <a href="https://www.instagram.com/Worldfoodprogramme/" target="_blank" rel="noopener noreferrer"> <i class="fab fa-instagram"></i> </a> -
        <a href="https://www.linkedin.com/company/world-food-programme" target="_blank" rel="noopener noreferrer"> <i class="fab fa-linkedin"></i> </a> 
        </p>
        <p className="Footer-content">
        © 2019 United Nations World Food Programme - Via C. G. Viola 68 Parco dei Medici - 00148 Rome, Italy
        <br>
        </br>
        <a href="https://cdn.wfp.org/donate/" target="_blank" rel="noopener noreferrer"> Donate </a> - 
        <a href="https://cdn.wfp.org/legal/terms/" target="_blank" rel="noopener noreferrer"> Terms of Use </a> -  
        <a href="https://www1.wfp.org/privacy-policy" target="_blank" rel="noopener noreferrer"> Privacy </a> - 
        <a href="http://www.wfp.org/contact" target="_blank" rel="noopener noreferrer"> Contact </a> - 
        <a href="https://executiveboard.wfp.org/" target="_blank" rel="noopener noreferrer"> Executive Board </a> - 
        <a href="https://wfpalumni.wfp.org/" target="_blank" rel="noopener noreferrer"> WFP Alumni </a>
        </p>
      </div>
    );
  }
}

export default Footer;
