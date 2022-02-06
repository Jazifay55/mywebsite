import "./contact.css"
import React from 'react';
import Topbar from "../../../components/Topbar/Topbar";

export default function Contact() {
  return <div className="contact">
         <Topbar/>
       <style>{'body { background-color: rgb(152, 152, 212); }'}</style>
       <div className="heading">
          <h1>My Resume</h1>
      </div>
      <div className="body">
          <p className="bodyMessage">
              Construction In Progress. &#128679;
          </p>
      </div>
  </div>;
}
