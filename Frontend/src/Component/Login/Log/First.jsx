import React from 'react';
import { Link } from 'react-router-dom';

const First = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        textAlign: 'center',
        fontFamily: 'Poppins, sans-serif',
        backgroundColor: '#f9f9f9'
      }}
    >
      <Link to= "/admin">
      <div
        style={{
          width: '200px',
          height: '50px',
          margin: '10px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          border: '1px solid #000',
          borderRadius: '5px',
          cursor: 'pointer',
          transition: 'background-color 0.3s',
          backgroundColor: 'white',
          color: '#333',
          fontFamily: 'Poppins, sans-serif'
        }}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#e0e0e0')}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = 'white')}
      >
        Admin
      </div>
      </Link>
      <Link to= "/user">
      <div
        style={{
          width: '200px',
          height: '50px',
          margin: '10px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          border: '1px solid #000',
          borderRadius: '5px',
          cursor: 'pointer',
          transition: 'background-color 0.3s',
          backgroundColor: 'white',
          color: '#333',
          fontFamily: 'Poppins, sans-serif'
        }}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#e0e0e0')}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = 'white')}
      >
        User
      </div>
      </Link>
    </div>
  );
};

export default First;
