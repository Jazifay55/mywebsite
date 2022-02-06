import './experience.css'

import React from 'react';
import Topbar from '../../../components/Topbar/Topbar';

export default function Experience() {
  return <div className='experience'>
      <Topbar/>
       <style>{'body { background-color: rgb(152, 152, 212); }'}</style>
      <div className="heading">
          <h1>My Experiences</h1>
      </div>
      <div className="body">
          <p className="bodyMessage">
              Construction In Progress. &#128679;
          </p>
      </div>
  </div>;
}
