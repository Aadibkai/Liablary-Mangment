import React from 'react';
import { Link } from 'react-router-dom';

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  textAlign: 'center',
  fontFamily: 'Poppins, sans-serif',
  backgroundColor: '#f9f9f9',
  backgroundImage: 'url("https://www.example.com/your-image.jpg")', // Add your background image URL here
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  color: '#fff'
};

const linkStyle = {
  width: '200px',
  height: '50px',
  margin: '10px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: '1px solid #000',
  borderRadius: '8px',
  cursor: 'pointer',
  transition: 'background-color 0.3s, box-shadow 0.3s, transform 0.3s, color 0.3s',
  backgroundColor: 'rgba(255, 255, 255, 0.8)',
  color: '#333',
  fontFamily: 'Poppins, sans-serif',
  padding: '10px',
};

const svgStyle = {
  marginRight: '10px',
  width: '20px',
  height: '20px'
};

const First = () => {
  return (
    <div style={containerStyle}>
      <Link to="/admin">
        <div
          style={linkStyle}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 1)';
            e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
            e.currentTarget.style.transform = 'scale(1.05)';
            e.currentTarget.style.color = '#000';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
            e.currentTarget.style.boxShadow = 'none';
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.color = '#333';
          }}
        >
          <svg style={svgStyle} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-1.1 0-2-.9-2-2h4c0 1.1-.9 2-2 2zm6-3H6v-1c0-2.66 5.33-4 6-4s6 1.34 6 4v1zm-6-6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
          </svg>
          Admin
        </div>
      </Link>
      <Link to="/user">
        <div
          style={linkStyle}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 1)';
            e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
            e.currentTarget.style.transform = 'scale(1.05)';
            e.currentTarget.style.color = '#000';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
            e.currentTarget.style.boxShadow = 'none';
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.color = '#333';
          }}
        >
          <svg style={svgStyle} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
          </svg>
          User
        </div>
      </Link>
    </div>
  );
};

export default First;
