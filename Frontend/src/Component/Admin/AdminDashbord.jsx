import React, { useState } from 'react';

const AdminDashboard = () => {
    const [showAddBookPopup, setShowAddBookPopup] = useState(false);
    const [showIssueBookPopup, setShowIssueBookPopup] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    };

    const handleDelete = (id) => {
        // Placeholder function for handling member deletion
    };

    const [bookDetails, setBookDetails] = useState({
        bookName: '',
        authorName: '',
        bookNum: ''
    });

    const [issueDetails, setIssueDetails] = useState({
        bookName: '',
        memberId: '',
        issueDate: '',
        returnDate: ''
    });

    const [addedBooks, setAddedBooks] = useState([]);
    const [issuedBooks, setIssuedBooks] = useState([]);
    const [totalBooksIssued, setTotalBooksIssued] = useState(0);
    const [members, setMembers] = useState([
        { id: 1, name: 'Adib' },
        { id: 2, name: 'John' },
        { id: 3, name: 'Jane' },
        { id: 4, name: 'Doe' }
    ]);

    const handleInputChange = (e, isIssueBook) => {
        const { name, value } = e.target;
        if (isIssueBook) {
            setIssueDetails(prevDetails => ({
                ...prevDetails,
                [name]: value
            }));
        } else {
            setBookDetails(prevDetails => ({
                ...prevDetails,
                [name]: value
            }));
        }
    };

    const handleAddBook = () => {
        if (bookDetails.bookName && bookDetails.authorName && bookDetails.bookNum) {
            setAddedBooks(prevBooks => [...prevBooks, bookDetails]);
            setShowAddBookPopup(false);
            setBookDetails({ bookName: '', authorName: '', bookNum: '' });
        } else {
            alert('Please fill in all fields.');
        }
    };

    const handleIssueBook = () => {
        if (issueDetails.bookName && issueDetails.memberId && issueDetails.issueDate && issueDetails.returnDate) {
            setIssuedBooks(prevBooks => [...prevBooks, issueDetails]);
            setTotalBooksIssued(prevCount => prevCount + 1);
            setShowIssueBookPopup(false);
            setIssueDetails({ bookName: '', memberId: '', issueDate: '', returnDate: '' });
        } else {
            alert('Please fill in all fields.');
        }
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
            <div style={{ width: '200px', backgroundColor: '#f0f0f0', padding: '10px', borderRadius: '5px' }}>
                <h1 style={{ marginBottom: '20px' }}>DASHBOARD</h1>

                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', cursor: 'pointer' }}>
                    <img src="add-books-icon.svg" alt="Add Books" style={{ width: '20px', height: '20px', marginRight: '10px' }} />
                    <p onClick={() => setShowAddBookPopup(true)}>ADD BOOKS</p>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', cursor: 'pointer' }}>
                    <img src="issue-books-icon.svg" alt="Issue Books" style={{ width: '20px', height: '20px', marginRight: '10px' }} />
                    <p onClick={() => setShowIssueBookPopup(true)}>ISSUE BOOKS</p>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', cursor: 'pointer' }} onClick={togglePopup}>
                    <img src="members-icon.svg" alt="Members" style={{ width: '20px', height: '20px', marginRight: '10px' }} />
                    <p>MEMBERS</p>
                </div>

                {isOpen && (
                    <div style={{
                        position: 'fixed',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        backgroundColor: '#D8D8D8',
                        padding: '20px',
                        border: '1px solid #ddd',
                        borderRadius: '5px',
                        zIndex: '1000',
                        width: '30%',
                        height: '50%',
                        overflowY: 'auto'
                    }}>
                        <h2 style={{ marginBottom: '15px', textAlign: 'center' }}>Member List</h2>
                        <ul style={{ listStyleType: 'none', padding: '0', textAlign: 'center' }}>
                            {members.map(member => (
                                <li key={member.id} style={{ marginBottom: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <span style={{ marginRight: '10px' }}><strong>ID:</strong> {member.id}</span>
                                    <span style={{ marginRight: '10px' }}><strong>Name:</strong> {member.name}</span>
                                    <button onClick={() => handleDelete(member.id)}>Delete</button>
                                </li>
                            ))}
                        </ul>
                        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '15px' }}>
                            <button onClick={togglePopup}>Cancel</button>
                        </div>
                    </div>
                )}

                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', cursor: 'pointer' }}>
                    <img src="settings-icon.svg" alt="Settings" style={{ width: '20px', height: '20px', marginRight: '10px' }} />
                    <p>SETTINGS</p>
                </div>
            </div>

            <div style={{ width: '80%', marginLeft: '20px' }}>
                <h1 style={{ marginBottom: '20px' }}>Welcome to Dashboard</h1>
                <p style={{ marginBottom: '10px' }}>Admin/Dashboard</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                    <div style={{ width: '200px', backgroundColor: '#f0f0f0', padding: '10px', borderRadius: '5px', textAlign: 'center' }}>
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                            <p>Total Books</p>
                        </div>
                        <h3 style={{ fontSize: '24px', marginBottom: '0' }}>{addedBooks.length}</h3>
                    </div>
                    <div style={{ width: '200px', backgroundColor: '#f0f0f0', padding: '10px', borderRadius: '5px', textAlign: 'center' }}>
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                            <p>Total Books Issued</p>
                        </div>
                        <h3 style={{ fontSize: '24px', marginBottom: '0' }}>{totalBooksIssued}</h3>
                    </div>
                    <div style={{ width: '200px', backgroundColor: '#f0f0f0', padding: '10px', borderRadius: '5px', textAlign: 'center' }}>
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                            <img src="members-icon.svg" alt="Members" style={{ width: '30px', height: '30px', marginRight: '10px' }} />
                            <p>Total Members</p>
                        </div>
                        <h3 style={{ fontSize: '24px', marginBottom: '0' }}>{members.length}</h3>
                    </div>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div style={{ width: '45%', backgroundColor: '#f0f0f0', padding: '10px', borderRadius: '5px' }}>
                        <h2 style={{ marginBottom: '10px' }}>New Members</h2>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                            <p>Adib</p>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <p>ID</p>
                            <p>Total Book Issued</p>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <p>#1234</p>
                            <p>01</p>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '10px' }}>
                            <img src="edit-icon.svg" alt="Edit" style={{ width: '20px', height: '20px', marginRight: '10px' }} />
                            <img src="delete-icon.svg" alt="Delete" style={{ width: '20px', height: '20px' }} />
                        </div>
                    </div>

                    <div style={{ width: '45%', backgroundColor: '#f0f0f0', padding: '10px', borderRadius: '5px' }}>
                        <h2 style={{ marginBottom: '10px' }}>Issued Books</h2>
                        {issuedBooks.map((book, index) => (
                            <div key={index} style={{ marginBottom: '20px', border: '1px solid #ddd', padding: '10px', borderRadius: '5px' }}>
                                <p><strong>Book Name:</strong> {book.bookName}</p>
                                <p><strong>Member ID:</strong> {book.memberId}</p>
                                <p><strong>Issue Date:</strong> {book.issueDate}</p>
                                <p><strong>Return Date:</strong> {book.returnDate}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {showAddBookPopup && (
                    <div style={{
                        position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center'
                    }}>
                        <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '5px', width: '300px' }}>
                            <h2>Add Book</h2>
                            <div style={{ marginBottom: '10px' }}>
                                <label>Book Name:</label>
                                <input type="text" name="bookName" value={bookDetails.bookName} onChange={(e) => handleInputChange(e, false)} style={{ width: '100%', padding: '5px', marginBottom: '10px', borderRadius: '3px', border: '1px solid #ccc' }} />
                            </div>
                            <div style={{ marginBottom: '10px' }}>
                                <label>Author Name:</label>
                                <input type="text" name="authorName" value={bookDetails.authorName} onChange={(e) => handleInputChange(e, false)} style={{ width: '100%', padding: '5px', marginBottom: '10px', borderRadius: '3px', border: '1px solid #ccc' }} />
                            </div>
                            <div style={{ marginBottom: '10px' }}>
                                <label>Book Number:</label>
                                <input type="text" name="bookNum" value={bookDetails.bookNum} onChange={(e) => handleInputChange(e, false)} style={{ width: '100%', padding: '5px', marginBottom: '10px', borderRadius: '3px', border: '1px solid #ccc' }} />
                            </div>
                            <button onClick={handleAddBook} style={{ padding: '5px 10px', marginRight: '10px', borderRadius: '3px', backgroundColor: '#4CAF50', color: 'white', border: 'none', cursor: 'pointer' }}>Add</button>
                            <button onClick={() => setShowAddBookPopup(false)} style={{ padding: '5px 10px', borderRadius: '3px', backgroundColor: '#f44336', color: 'white', border: 'none', cursor: 'pointer' }}>Cancel</button>
                        </div>
                    </div>
                )}

                {showIssueBookPopup && (
                    <div style={{
                        position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center'
                    }}>
                        <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '5px', width: '300px' }}>
                            <h2>Issue Book</h2>
                            <div style={{ marginBottom: '10px' }}>
                                <label>Book Name:</label>
                                <input type="text" name="bookName" value={issueDetails.bookName} onChange={(e) => handleInputChange(e, true)} style={{ width: '100%', padding: '5px', marginBottom: '10px', borderRadius: '3px', border: '1px solid #ccc' }} />
                            </div>
                            <div style={{ marginBottom: '10px' }}>
                                <label>Member ID:</label>
                                <input type="text" name="memberId" value={issueDetails.memberId} onChange={(e) => handleInputChange(e, true)} style={{ width: '100%', padding: '5px', marginBottom: '10px', borderRadius: '3px', border: '1px solid #ccc' }} />
                            </div>
                            <div style={{ marginBottom: '10px' }}>
                                <label>Issue Date:</label>
                                <input type="date" name="issueDate" value={issueDetails.issueDate} onChange={(e) => handleInputChange(e, true)} style={{ width: '100%', padding: '5px', marginBottom: '10px', borderRadius: '3px', border: '1px solid #ccc' }} />
                            </div>
                            <div style={{ marginBottom: '10px' }}>
                                <label>Return Date:</label>
                                <input type="date" name="returnDate" value={issueDetails.returnDate} onChange={(e) => handleInputChange(e, true)} style={{ width: '100%', padding: '5px', marginBottom: '10px', borderRadius: '3px', border: '1px solid #ccc' }} />
                            </div>
                            <button onClick={handleIssueBook} style={{ padding: '5px 10px', marginRight: '10px', borderRadius: '3px', backgroundColor: '#4CAF50', color: 'white', border: 'none', cursor: 'pointer' }}>Issue</button>
                            <button onClick={() => setShowIssueBookPopup(false)} style={{ padding: '5px 10px', borderRadius: '3px', backgroundColor: '#f44336', color: 'white', border: 'none', cursor: 'pointer' }}>Cancel</button>
                        </div>
                    </div>
                )}

                {addedBooks.length > 0 && (
                    <div style={{ width: '30%', marginLeft: '20px' }}>
                        <h2>Added Books</h2>
                        {addedBooks.map((book, index) => (
                            <div key={index} style={{ marginBottom: '20px', border: '1px solid #ddd', padding: '10px', borderRadius: '5px', backgroundColor: '#f0f0f0' }}>
                                <p><strong>Book Name:</strong> {book.bookName}</p>
                                <p><strong>Author Name:</strong> {book.authorName}</p>
                                <p><strong>Book Number:</strong> {book.bookNum}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>

        </div>
    );
}

export default AdminDashboard;
