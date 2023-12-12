import React from 'react';
import linkedin from '../assets/linkedin.svg'
import github from '../assets/github.png'


const Contact = () => {
  const handleLinkedInClick = () => {
    const linkedInURL = "https://www.linkedin.com/in/fridagathima";
    window.open(linkedInURL, '_blank');
  };

  const handleGitHubClick = () => {
    const gitHubURL = "https://github.com/FridaGathima";
    window.open(gitHubURL, '_blank');
  };

  return (
    <section className="contact">
      <h2> <u> Contact Me</u></h2>
      <h3>I'm available for work, get in touch!</h3>
      <p><b>Email:</b> ndutafrida@gmail.com</p>
      <p><b>Phone Number:</b> +254720948464</p>
      <img src={linkedin} alt="LinkedIn - Frida Gathima" className='linkedinicon' onClick={handleLinkedInClick}/>
      <img src={github} alt="GitHub - Frida Gathimaa" className='githubicon' onClick={handleGitHubClick} />
     
    </section>
  );
};

export default Contact;
