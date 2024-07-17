import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Userdash = () => {


    return (
        <div style={{ display: 'flex', justifyContent: 'space-between',}}>
            <div style={{ width: '200px', height: "100vh", backgroundColor: '#f0f0f0', padding: '10px', borderRadius: '5px', padding: '20px'  }}>
                <h1 style={{ marginBottom: '20px' }}>DASHBOARD</h1>
               <Link to="/"> <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', cursor: 'pointer' }}>
                    <img src="add-books-icon.svg" alt="Add Books" style={{ width: '20px', height: '20px', marginRight: '10px' }} />
                    <p >Home</p>
                </div>
                </Link>
                
                <Link to="/books"><div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', cursor: 'pointer' }}>
                    <img src="add-books-icon.svg" alt="Add Books" style={{ width: '20px', height: '20px', marginRight: '10px' }} />
                    <p >Books</p>
                </div>
                </Link>

               <Link to="/profil"> <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', cursor: 'pointer' }}>
                    <img src="add-books-icon.svg" alt="Add Books" style={{ width: '20px', height: '20px', marginRight: '10px' }} />
                    <p >Profile</p>
                </div>
                </Link>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', cursor: 'pointer' }}>
                    <img src="add-books-icon.svg" alt="Add Books" style={{ width: '20px', height: '20px', marginRight: '10px' }} />
                    <p >LogOut</p>
                </div>
            </div>




        </div>
    );
}

export default Userdash