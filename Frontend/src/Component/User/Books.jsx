import React from 'react'
import Userdash from './Userdash'

const Books = () => {
    const books = [
        { id: 1, name: 'Book A', available: true },
        { id: 2, name: 'Book B', available: false },
        { id: 3, name: 'Book C', available: true },
        { id: 4, name: 'Book D', available: false },
        { id: 5, name: 'Book E', available: true },
    ];
    return (
        <div style={{ display: "flex" }}>
            <div><Userdash /></div>
            <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",width:"100%"}}>
                <h1>All Books</h1>
                <div style={{ Width: '100%', margin: 'auto', marginTop: '20px' }}>
                    {books.map((book, index) => (
                        <div key={book.id} style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            marginBottom: '10px',
                            padding: '10px',
                            border: '1px solid #ccc',
                            borderRadius: '8px',
                            gap:"200px"
                        }}>
                            <div style={{ flex: 1 }}>
                                <strong>{index + 1}</strong>  {book.name}
                            </div>
                            <div>
                                {book.available ? (
                                    <span style={{ color: 'green' }}>Available</span>
                                ) : (
                                    <span style={{ color: 'red' }}>Not Available</span>
                                )}
                            </div>
                            <button style={{
                                backgroundColor: '#007bff',
                                color: '#fff',
                                border: 'none',
                                padding: '8px 16px',
                                borderRadius: '5px',
                                cursor: 'pointer',
                            }}>
                                Borrow
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Books