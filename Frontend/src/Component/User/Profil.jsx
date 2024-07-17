import React from 'react';
import Userdash from './Userdash';

const Profil = () => {
    // Example user details
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
                fontFamily: 'Arial, sans-serif',
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
                <div style={{ textAlign: "left" }}>
                    <div style={{ marginBottom: '20px' }}>
                        <strong style={{ color: '#555', marginRight: '10px' }}>Name:</strong> {user.name}
                    </div>
                    <div style={{ marginBottom: '20px' }}>
                        <strong style={{ color: '#555', marginRight: '10px' }}>Email:</strong> {user.email}
                    </div>
                    <div style={{ marginBottom: '20px' }}>
                        <strong style={{ color: '#555', marginRight: '10px' }}>Phone:</strong> {user.phone}
                    </div>
                    <div style={{ marginBottom: '20px' }}>
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
                    }}>Edit</button>
                </div>
            </div>
        </div>
    );
}

export default Profil;
