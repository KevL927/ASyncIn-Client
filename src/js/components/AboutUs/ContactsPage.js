import React from 'react';
import FaGithubSquare from 'react-icons/lib/fa/github-square';

import surbhiPic from './img/surbhi-pic.png';
import laviePic from './img/lavie-pic.png';
import tigerPic from './img/tiger-pic.png';
import michellePic from './img/michelle-pic.png';
import './styles.css';

export default () => {
  return (
    <div className="contactDev">
      <span id="meet_header">Meet the Team</span>
      <div id="project-demo">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/A8AEijXbFms" frameBorder="0" allowFullScreen></iframe>
      </div>
      <div className="Surbhi_container">
        <div className='Surbhi'>
          <img src={surbhiPic} alt="Surbhi" />
          <h1>Surbhi Poswalia</h1>
          <h3 className="project_roles">Project Manager</h3>
        </div>
        <div className="name-Designation surbhi-contact">
          <p className="paragraph_right">Hey, there. I'm Surbhi. As a kid I was always amazed with computers. I was in 3rd grade when I learned my first programming language LOGO, I was so inspired with how just some set of characters and numbers can make circles or rectangles. I decided to pursue my career in Computer Science. I did my internship at Bharti Airtel Mumbai and worked on a project of SalesMan's guide using Java. After completing my bachelors, I joined Infosys as a system engineer. I really enjoyed working the project and thereby became passionate in developing a full stack application and become a software developer. To learn all about the full stack development, I joined coding bootcamp. Recently I have been learning and using various technologies such as JavaScript,Node.js, React, Redux and databases such as MongoDB, PostgreSQL, KNEX.js.</p>
          <div><a href="https://github.com/surbhiposwalia" className="contact_info">Github<FaGithubSquare/></a></div>
        </div>
      </div>
      <div className="Lavie_container">
        <div className="Lavie">
          <img src={laviePic} alt="Lavie" />
          <h1>Lavie Ruan</h1>
          <h3 className="project_roles">Scrum Master</h3>
        </div>
        <div className="name-Designation lavie-contact">
          <p className="paragraph_left">Hello! My name is Lavie and I'm the Scrum Master and the Full Stack Developer of this project. My responsibilities in this project include: implement the redux actions, set up the backend development environment, implement the search API in the backend and the frontend, and build the functionalities across all pages. My creativity becomes limitless whenever it comes to web developement. In the near future, I want to continuously create projects to inspire and change people's lives. I am always up for new project collaborations, coffee, or code talk. :)</p>
          <div><a target="_blank" href="https://github.com/Lavioli" className="contact_info">Github<FaGithubSquare/></a></div>
        </div>
      </div>
      <div className="Kevin_container">
        <div className='Kevin'>
          <img src={tigerPic} alt="tiger" />
          <h1>Kevin Lee</h1>
          <h3 className="project_roles">Product Manager</h3>
        </div>
        <div className="name-Designation kevin-contact">
          <p className="paragraph_right">Hello, my name is Kevin and I'm the Product Manager and Full Stack Developer for this project. My responsibilities were, but not limited to: implementing Google and Facebook OAuth, music player functionalities, account settings page and coding various client and server functionalities. Also, I advised the team with choosing the right tools, such as Axios, Redux-actions, React player and more. In my spare time, I enjoy exploring new technologies and becoming an early adopter, read books that can take me to places I can't even dream of and go hiking on the mountains to be with the nature.</p>
          <div><a href="https://github.com/KevL927" className="contact_info">Github<FaGithubSquare/></a></div>
        </div>
      </div>
      <div className="Michelle_container">
        <div className='Michelle'>
          <img src={michellePic} alt="Michelle" />
          <h1>Michelle Nguyen</h1>
          <h3 className="project_roles">Design Manager</h3>
        </div>
        <div className="name-Designation michelle-contact">
          <p className="paragraph_left">Hey. Contact me. kthxbai Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,  sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
          <div><a href="https://github.com/MsUnSweetTea" className="contact_info">Github<FaGithubSquare/></a></div>
        </div>
      </div>
    </div>
  );
};