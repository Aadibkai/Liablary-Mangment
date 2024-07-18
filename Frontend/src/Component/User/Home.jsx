import React from 'react';
import Userdash from './Userdash';

const Home = () => {
    const bookCardStyle = {
        width: 'fit-content',
        maxWidth: '600px',
        margin: '20px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '20px',
        backgroundColor: '#fff',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.3s, box-shadow 0.3s',
    };

    const buttonStyle = {
        marginTop: '10px',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        padding: '8px 16px',
        borderRadius: '4px',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
    };

    return (
        <div style={{ display: "flex" }}>
            <Userdash />
            <div style={{ flex: 1, padding: '20px' }}>
                <div>
                    <h1 style={{ textAlign: 'center', margin: '20px 0', fontFamily: 'Poppins, sans-serif', fontSize: '28px' }}>Issued Books By You</h1>

                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start', flexWrap: 'wrap' }}>
                        {/* Book Card 1 */}
                        <div style={bookCardStyle}
                            onMouseOver={(e) => {
                                e.currentTarget.style.transform = 'scale(1.05)';
                                e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.transform = 'scale(1)';
                                e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
                            }}>
                            <h2 style={{ marginBottom: '10px' }}>Book Name: New</h2>
                            <p>Author: Author Name</p>
                            <p>Issued Date: 11/12/24</p>
                            <button style={buttonStyle}
                                onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0056b3'}
                                onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#007bff'}>
                                Return Book
                            </button>
                        </div>

                        {/* Book Card 2 */}
                        <div style={bookCardStyle}
                            onMouseOver={(e) => {
                                e.currentTarget.style.transform = 'scale(1.05)';
                                e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.transform = 'scale(1)';
                                e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
                            }}>
                            <h2 style={{ marginBottom: '10px' }}>Book Name: New</h2>
                            <p>Author: Author Name</p>
                            <p>Issued Date: 11/12/24</p>
                            <button style={buttonStyle}
                                onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0056b3'}
                                onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#007bff'}>
                                Return Book
                            </button>
                        </div>

                        {/* Book Card 3 */}
                        <div style={bookCardStyle}
                            onMouseOver={(e) => {
                                e.currentTarget.style.transform = 'scale(1.05)';
                                e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.transform = 'scale(1)';
                                e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
                            }}>
                            <h2 style={{ marginBottom: '10px' }}>Book Name: New</h2>
                            <p>Author: Author Name</p>
                            <p>Issued Date: 11/12/24</p>
                            <button style={buttonStyle}
                                onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0056b3'}
                                onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#007bff'}>
                                Return Book
                            </button>
                        </div>
                    </div>
                </div>

                <div>
                    <h1 style={{ textAlign: 'center', margin: '20px 0', fontFamily: 'Poppins, sans-serif', fontSize: '28px' }}>Related To You</h1>

                    <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
                        {/* Book Card 1 */}
                        <div style={bookCardStyle}
                            onMouseOver={(e) => {
                                e.currentTarget.style.transform = 'scale(1.05)';
                                e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.transform = 'scale(1)';
                                e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
                            }}>
                            <h2 style={{ marginBottom: '10px' }}>Book Name: New</h2>
                            <p>Author: Author Name</p>
                            <button style={buttonStyle}
                                onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0056b3'}
                                onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#007bff'}>
                                Borrow Book
                            </button>
                        </div>

                        {/* Book Card 2 */}
                        <div style={bookCardStyle}
                            onMouseOver={(e) => {
                                e.currentTarget.style.transform = 'scale(1.05)';
                                e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.transform = 'scale(1)';
                                e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
                            }}>
                            <h2 style={{ marginBottom: '10px' }}>Book Name: New</h2>
                            <p>Author: Author Name</p>
                            <button style={buttonStyle}
                                onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0056b3'}
                                onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#007bff'}>
                                Borrow Book
                            </button>
                        </div>

                        {/* Book Card 3 */}
                        <div style={bookCardStyle}
                            onMouseOver={(e) => {
                                e.currentTarget.style.transform = 'scale(1.05)';
                                e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.transform = 'scale(1)';
                                e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
                            }}>
                            <h2 style={{ marginBottom: '10px' }}>Book Name: New</h2>
                            <p>Author: Author Name</p>
                            <button style={buttonStyle}
                                onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0056b3'}
                                onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#007bff'}>
                                Borrow Book
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
