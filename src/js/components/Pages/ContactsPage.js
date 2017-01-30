import React, { Component } from 'react';
import FaGithubSquare from 'react-icons/lib/fa/github-square';
import FaGlobe from 'react-icons/lib/fa/globe';
//import {Link} from 'react-router';

class ContactDev extends Component {
  render() {
    return (
      <div className="contactDev">
        <span id="meet_header"> Meet the Web Developers</span>
        <div className="Surbhi_container">
        <div className='Surbhi'>
        <img src="http://i.imgur.com/y4gDQZH.png"/>
          <h1>Surbhi Poswalia</h1>
          <h3 className="project_roles">Project Manager</h3>
        </div>
              <div className="name-Designation surbhi-contact">
              
              <p className="paragraph_float_right">Hey, there. I'm Surbhi. As a kid i was always amazed with computers. I was in 3rd grade when i learned my first programming language LOGO, i was so inspired with how just some set of characters and numbers can make circles or rectangles. I decided to pursue my career in Computer Science. I did my internship at Bharti Airtel Mumbai and worked on a project of SalesMan's guide using Java. After completing my bachelors, i joined Infosys as a system engineer. I really enjoyed working the project and thereby became passionate in developing a full stack application and become a software developer. To learn all about the full stack development, i joined coding bootcamp. Recently i have been learning and using various technologies such as JavaScript,Node.js, React , Redux and databases such as Mongo Db, postgr SQL, KNEX.js.
              <div><a href="https://github.com/surbhiposwalia" className="contact_info">Github<FaGithubSquare/></a></div> </p>
              </div>
        
        </div>
        <div className="Lavie_container">
          <div className="Lavie">
            <img src="http://i.imgur.com/fx2K2d0.png" />
            <h1>Lavie Ruan</h1>
            <h3 className="project_roles">Scrum Master</h3>
          </div>
            
              <p className="paragraph_left">Hello! My name is Lavie and I am the Scrum Master and the Full Stack Developer of this project. My responsibilities in this project include: implement the redux actions, set up the backend development environment, implement the search API in the backend and the frontend, and build the functionalities across all pages. My creativity becomes limitless whenever it comes to web developement. In the near future, I want to continuously create projects to inspire and change people's lives. I am always up for new project collaborations, coffee, or code talk. :)
              <div><a target="_blank" href="https://github.com/Lavioli" className="contact_info">Github<FaGithubSquare/></a>
                </div>
              </p>
              </div>
        <div className="Kevin_container">
        <div className='Kevin'>
          <img src="http://i.imgur.com/Tl1XhwA.png"/>
          <h1>Kevin Lee</h1>
          <h3 className="project_roles">Product Manager</h3>
        </div>
            <div className="name-Designation kevin-contact">
              <p className="paragraph_float_right">Hey, there. I'm Kevin. I am a Korean pop star singing rap and joining hardcore Korean gangs, but I left that rigid life behind to do something more stable and safe. Contact me! Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,  sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,  sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
              <div><a href="https://github.com/KevL927" className="contact_info">Github<FaGithubSquare/></a></div> </p>
            </div>
        </div>
        <div className="Michelle_container">
          <div className='Michelle'>
            <img src="http://i.imgur.com/iyMPoeK.png"/>
            <h1>Michelle Nguyen</h1>
            <h3 className="project_roles">Design Manager</h3>
          </div>
            
              <p className="paragraph_left">Hey. Contact me. kthxbai Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,  sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,  sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum do lor sit amet.
              <div><a href="https://github.com/MsUnSweetTea" className="contact_info">Github<FaGithubSquare/></a></div> </p>
        </div>
        </div>
    );
  }
}

export default ContactDev;