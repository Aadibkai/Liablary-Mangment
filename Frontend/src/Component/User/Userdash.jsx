import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Userdash = () => {
  const location = useLocation();

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div style={{ width: '200px', height: '100vh', backgroundColor: '#f0f0f0', padding: '20px', borderRadius: '5px' }}>
        <h1 style={{ marginBottom: '20px', fontSize: '24px', color: '#333', fontFamily: 'Poppins' }}>DASHBOARD</h1>

        <Link to="/1" style={{ textDecoration: 'none' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '10px',
              cursor: 'pointer',
              padding: '10px',
              borderRadius: '4px',
              backgroundColor: location.pathname === '/' ? '#e0e0e0' : '#f0f0f0',
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 9.5L12 2L21 9.5V21C21 21.2652 20.8946 21.5196 20.7071 21.7071C20.5196 21.8946 20.2652 22 20 22H4C3.73478 22 3.48043 21.8946 3.29289 21.7071C3.10536 21.5196 3 21.2652 3 21V9.5Z" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9 22V12H15V22" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <p style={{ color: '#333', fontFamily: 'Poppins', marginLeft: '10px' }}>Home</p>
          </div>
        </Link>

        <Link to="/books1" style={{ textDecoration: 'none' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '10px',
              cursor: 'pointer',
              padding: '10px',
              borderRadius: '4px',
              backgroundColor: location.pathname.startsWith('/books') ? '#e0e0e0' : '#f0f0f0',
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 19.5C4 19.2348 4.10536 18.9804 4.29289 18.7929C4.48043 18.6054 4.73478 18.5 5 18.5H19C19.2652 18.5 19.5196 18.6054 19.7071 18.7929C19.8946 18.9804 20 19.2348 20 19.5V21.5H4V19.5Z" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M4 14.5C4 14.2348 4.10536 13.9804 4.29289 13.7929C4.48043 13.6054 4.73478 13.5 5 13.5H19C19.2652 13.5 19.5196 13.6054 19.7071 13.7929C19.8946 13.9804 20 14.2348 20 14.5V16.5H4V14.5Z" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M4 9.5C4 9.23478 4.10536 8.98043 4.29289 8.79289C4.48043 8.60536 4.73478 8.5 5 8.5H19C19.2652 8.5 19.5196 8.60536 19.7071 8.79289C19.8946 8.98043 20 9.23478 20 9.5V11.5H4V9.5Z" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M4 4.5C4 4.23478 4.10536 3.98043 4.29289 3.79289C4.48043 3.60536 4.73478 3.5 5 3.5H19C19.2652 3.5 19.5196 3.60536 19.7071 3.79289C19.8946 3.98043 20 4.23478 20 4.5V6.5H4V4.5Z" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <p style={{ color: '#333', fontFamily: 'Poppins', marginLeft: '10px' }}>Books</p>
          </div>
        </Link>

        <Link to="/profile1" style={{ textDecoration: 'none' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '10px',
              cursor: 'pointer',
              padding: '10px',
              borderRadius: '4px',
              backgroundColor: location.pathname.startsWith('/profile') ? '#e0e0e0' : '#f0f0f0',
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M4 20C4 17.2386 7.13401 15 12 15C16.866 15 20 17.2386 20 20" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <p style={{ color: '#333', fontFamily: 'Poppins', marginLeft: '10px' }}>Profile</p>
          </div>
        </Link>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '10px',
            cursor: 'pointer',
            padding: '10px',
            borderRadius: '4px',
            transition: 'background-color 0.3s',
          }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#e0e0e0')}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#f0f0f0')}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 3H21V9" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9 21H3V15" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M21 3L13 11" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M11 13L3 21" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <p style={{ color: '#333', fontFamily: 'Poppins', marginLeft: '10px' }}>Log Out</p>
        </div>
      </div>
    </div>
  );
}

export default Userdash;
