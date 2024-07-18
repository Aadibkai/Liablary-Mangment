import React from 'react';
import Userdash from './Userdash';

const Books = () => {
    const books = [
        { id: 1, name: 'Book A', available: true },
        { id: 2, name: 'Book B', available: false },
        { id: 3, name: 'Book C', available: true },
        { id: 4, name: 'Book D', available: false },
        { id: 5, name: 'Book E', available: true },
    ];

    const bookCardStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '10px',
        padding: '10px 20px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        backgroundColor: '#fff',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.3s, box-shadow 0.3s',
        width: '100%',
        maxWidth: '600px'
    };

    const buttonStyle = {
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        padding: '8px 16px',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
    };

    return (
        <div style={{ display: "flex" }}>
            <Userdash />
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "100%", padding: '20px' }}>
                <h1 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '28px', marginBottom: '20px' }}>All Books</h1>
                <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    {books.map((book, index) => (
                        <div key={book.id} style={bookCardStyle}
                            onMouseOver={(e) => {
                                e.currentTarget.style.transform = 'scale(1.05)';
                                e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.transform = 'scale(1)';
                                e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
                            }}>
                            <div style={{ flex: 1 }}>
                                <strong style={{ marginRight: '10px' }}>{index + 1}</strong> {book.name}
                            </div>
                            <div>
                                {book.available ? (
                                    <span style={{ color: 'green' }}>Available</span>
                                ) : (
                                    <span style={{ color: 'red' }}>Not Available</span>
                                )}
                            </div>
                            <button style={buttonStyle}
                                onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0056b3'}
                                onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#007bff'}>
                                Borrow
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Books;
