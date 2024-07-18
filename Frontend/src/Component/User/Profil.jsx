import React from 'react';
import Userdash from './Userdash';

const Profil = () => {
    const user = {
        name: 'John Doe',
        email: 'john.doe@example.com',
        phone: '+1234567890',
        address: '123 Main St, City, Country',
    };

    return (
        <div style={{ display: "flex" }}>
            <Userdash />
            <div style={{
                maxWidth: '600px',
                margin: '40px auto',
                padding: '30px',
                border: '1px solid #ddd',
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                backgroundColor: '#f9f9f9',
                fontFamily: 'Poppins, sans-serif',
                height: '60%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'left',
            }}>
                <h1 style={{
                    textAlign: 'center',
                    marginBottom: '30px',
                    color: '#333',
                    fontSize: '24px',
                    textTransform: 'uppercase',
                    borderBottom: '2px solid #ddd',
                    paddingBottom: '10px',
                }}>User Profile</h1>
                <div style={{ textAlign: "left", width: '100%' }}>
                    <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '10px' }}>
                            <path d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z" stroke="#555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M4 20C4 17.2386 7.13401 15 12 15C16.866 15 20 17.2386 20 20" stroke="#555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <strong style={{ color: '#555', marginRight: '10px' }}>Name:</strong> {user.name}
                    </div>
                    <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '10px' }}>
                            <path d="M16 2H8C6.89543 2 6 2.89543 6 4V20C6 21.1046 6.89543 22 8 22H16C17.1046 22 18 21.1046 18 20V4C18 2.89543 17.1046 2 16 2Z" stroke="#555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M8 4L12 11L16 4" stroke="#555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <strong style={{ color: '#555', marginRight: '10px' }}>Email:</strong> {user.email}
                    </div>
                    <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '10px' }}>
                            <path d="M20 15.5V17C20 18.6569 18.6569 20 17 20H7C5.34315 20 4 18.6569 4 17V15.5" stroke="#555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M17 10C18.6569 10 20 8.65685 20 7C20 5.34315 18.6569 4 17 4C15.3431 4 14 5.34315 14 7C14 8.65685 15.3431 10 17 10Z" stroke="#555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M7 10C8.65685 10 10 8.65685 10 7C10 5.34315 8.65685 4 7 4C5.34315 4 4 5.34315 4 7C4 8.65685 5.34315 10 7 10Z" stroke="#555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <strong style={{ color: '#555', marginRight: '10px' }}>Phone:</strong> {user.phone}
                    </div>
                    <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '10px' }}>
                            <path d="M3 21V3H17L21 7V21C21 21.2652 20.8946 21.5196 20.7071 21.7071C20.5196 21.8946 20.2652 22 20 22H4C3.73478 22 3.48043 21.8946 3.29289 21.7071C3.10536 21.5196 3 21.2652 3 21Z" stroke="#555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M13 2V7H18" stroke="#555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <strong style={{ color: '#555', marginRight: '10px' }}>Address:</strong> {user.address}
                    </div>
                </div>
                <div>
                    <button style={{
                        backgroundColor: '#007bff',
                        color: '#fff',
                        padding: '10px 20px',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        fontSize: '16px',
                        marginTop: '20px',
                        alignSelf: 'center',
                        textTransform: 'uppercase',
                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                        transition: 'background-color 0.3s',
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#0056b3')}
                    onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#007bff')}
                    >Edit</button>
                </div>
            </div>
        </div>
    );
}

export default Profil;
