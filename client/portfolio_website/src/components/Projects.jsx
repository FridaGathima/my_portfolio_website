import React from 'react';

const Projects = () => {
  return (
    <section className="projects">
      <h2>Projects</h2>
      <h3>SwiftReview : Business Review Website</h3>
      <p>This project combines a Flask API for managing business reviews with a React frontend for a seamless user experience.</p>
      <p><a href="https://swift-review.onrender.com/"  target="_blank" rel="noopener noreferrer">SwiftReview Website</a></p>
      <h3>S-Libre : Social Media Site</h3>
      <p>S-Libre is a platform that allows students to create and share learning materials like technical topics and tutorial videos. Students can rate the quality of each course material to help others find high-quality resources. The materials with the highest likes are displayed first. By using S-Libre, students can help each other learn and succeed!</p>
      <p><a href="https://s-libre.netlify.app/" target="_blank" rel="noopener noreferrer">S-Libre Website</a></p>
      <h3>LitHaven Api : Comprehensive API for Booklovers</h3>
      <p>This comprehensive API is specifically designed for developers who wish to develop an application designed for purchase and borrowing of books.This flask-based API provides endpoints to create and manage users and administrators.</p>
      <p><a href="https://lithavenapi.onrender.com/books" target="_blank" rel="noopener noreferrer">LitHaven API</a></p>
    </section>
  );
};

export default Projects;
