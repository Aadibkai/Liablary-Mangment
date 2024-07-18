import axios from 'axios';
import React, { useState, useEffect } from 'react';

const AdminDashboard = () => {
    const [showAddBookPopup, setShowAddBookPopup] = useState(false);
    const [showIssueBookPopup, setShowIssueBookPopup] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
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
    const [members, setMembers] = useState([]);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await axios.get('http://localhost:3001/api/user/signUp');
            setMembers(response.data.users); // Assuming the response contains an array of users
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    const togglePopup = () => {
        setIsOpen(!isOpen);
    };

    const handleDelete = (id) => {
        // Placeholder function for handling member deletion
    };

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

    const handleAddBook = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/api/addbook', bookDetails);
            setAddedBooks(prevBooks => [...prevBooks, response.data.book]);
            setShowAddBookPopup(false);
            setBookDetails({ bookName: '', authorName: '', bookNum: '' });
        } catch (error) {
            console.error('Error adding book:', error);
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
            <Sidebar
                setShowAddBookPopup={setShowAddBookPopup}
                setShowIssueBookPopup={setShowIssueBookPopup}
                togglePopup={togglePopup}
            />

            <MainContent
                addedBooks={addedBooks}
                issuedBooks={issuedBooks}
                totalBooksIssued={totalBooksIssued}
                members={members}
                handleDelete={handleDelete}
                isOpen={isOpen}
                togglePopup={togglePopup}
            />

            {showAddBookPopup && (
                <Popup onClose={() => setShowAddBookPopup(false)}>
                    <AddBookForm
                        bookDetails={bookDetails}
                        handleInputChange={handleInputChange}
                        handleAddBook={handleAddBook}
                    />
                </Popup>
            )}

            {showIssueBookPopup && (
                <Popup onClose={() => setShowIssueBookPopup(false)}>
                    <IssueBookForm
                        issueDetails={issueDetails}
                        handleInputChange={handleInputChange}
                        handleIssueBook={handleIssueBook}
                    />
                </Popup>
            )}
        </div>
    );
}

const Sidebar = ({ setShowAddBookPopup, setShowIssueBookPopup, togglePopup }) => (
    <div style={{ width: '200px', backgroundColor: '#f0f0f0', padding: '10px', borderRadius: '5px' }}>
        <h1 style={{ marginBottom: '20px', textAlign: 'center' }}>DASHBOARD</h1>
        <SidebarItem icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 2L2 7l10 5 10-5-10-5zM4 16v-2h16v2H4zm0 4v-2h16v2H4z"/></svg>} text="ADD BOOKS" onClick={() => setShowAddBookPopup(true)} />
        <SidebarItem icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 2L2 7l10 5 10-5-10-5zM4 16v-2h16v2H4zm0 4v-2h16v2H4z"/></svg>} text="ISSUE BOOKS" onClick={() => setShowIssueBookPopup(true)} />
        <SidebarItem icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 2L2 7l10 5 10-5-10-5zM4 16v-2h16v2H4zm0 4v-2h16v2H4z"/></svg>} text="MEMBERS" onClick={togglePopup} />
        <SidebarItem icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 2L2 7l10 5 10-5-10-5zM4 16v-2h16v2H4zm0 4v-2h16v2H4z"/></svg>} text="SETTINGS" />
    </div>
);

const SidebarItem = ({ icon, text, onClick }) => (
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', cursor: 'pointer' }} onClick={onClick}>
        {icon}
        <p style={{ marginLeft: '10px' }}>{text}</p>
    </div>
);

const MainContent = ({ addedBooks, issuedBooks, totalBooksIssued, members, handleDelete, isOpen, togglePopup }) => (
    <div style={{ width: '80%', marginLeft: '20px' }}>
        <h1 style={{ marginBottom: '20px' }}>Welcome to Dashboard</h1>
        <p style={{ marginBottom: '10px' }}>Admin/Dashboard</p>
        <Stats totalBooks={addedBooks.length} totalBooksIssued={totalBooksIssued} totalMembers={members.length} />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
            <NewMembers members={members} handleDelete={handleDelete} />
            <IssuedBooks issuedBooks={issuedBooks} />
        </div>
        {addedBooks.length > 0 && (
            <AddedBooks addedBooks={addedBooks} />
        )}
        {isOpen && (
            <Popup onClose={togglePopup}>
                <MemberList members={members} handleDelete={handleDelete} />
            </Popup>
        )}
    </div>
);

const Stats = ({ totalBooks, totalBooksIssued, totalMembers }) => (
    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <StatBox title="Total Books" value={totalBooks} />
        <StatBox title="Total Books Issued" value={totalBooksIssued} />
        <StatBox title="Total Members" value={totalMembers} />
    </div>
);

const StatBox = ({ title, value }) => (
    <div style={{ width: '200px', backgroundColor: '#f0f0f0', padding: '10px', borderRadius: '5px', textAlign: 'center' }}>
        <p>{title}</p>
        <h3 style={{ fontSize: '24px', marginBottom: '0' }}>{value}</h3>
    </div>
);

const NewMembers = ({ members, handleDelete }) => (
    <div style={{ width: '45%', backgroundColor: '#f0f0f0', padding: '10px', borderRadius: '5px' }}>
        <h2 style={{ marginBottom: '10px' }}>New Members</h2>
        {members.map(member => (
            <MemberCard key={member.id} member={member} handleDelete={handleDelete} />
        ))}
    </div>
);

const MemberCard = ({ member, handleDelete }) => (
    <div style={{ marginBottom: '20px', border: '1px solid #ddd', padding: '10px', borderRadius: '5px' }}>
        <p>Name: {member.name}</p>
        <p>Email: {member.email}</p>
        <button onClick={() => handleDelete(member.id)}>Delete</button>
    </div>
);

const IssuedBooks = ({ issuedBooks }) => (
    <div style={{ width: '45%', backgroundColor: '#f0f0f0', padding: '10px', borderRadius: '5px' }}>
        <h2 style={{ marginBottom: '10px' }}>Issued Books</h2>
        {issuedBooks.map((book, index) => (
            <div key={index} style={{ marginBottom: '20px', border: '1px solid #ddd', padding: '10px', borderRadius: '5px' }}>
                <p>Book: {book.bookName}</p>
                <p>Member ID: {book.memberId}</p>
                <p>Issue Date: {book.issueDate}</p>
                <p>Return Date: {book.returnDate}</p>
            </div>
        ))}
    </div>
);

const AddedBooks = ({ addedBooks }) => (
    <div style={{ marginTop: '20px', backgroundColor: '#f0f0f0', padding: '10px', borderRadius: '5px' }}>
        <h2 style={{ marginBottom: '10px' }}>Added Books</h2>
        {addedBooks.map(book => (
            <div key={book.id} style={{ marginBottom: '20px', border: '1px solid #ddd', padding: '10px', borderRadius: '5px' }}>
                <p>Name: {book.bookName}</p>
                <p>Author: {book.authorName}</p>
                <p>Book Number: {book.bookNum}</p>
            </div>
        ))}
    </div>
);

const Popup = ({ children, onClose }) => (
    <div style={{ position: 'fixed', top: '0', left: '0', width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: '9999', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '5px', minWidth: '400px' }}>
            <button style={{ float: 'right', border: 'none', background: 'transparent', cursor: 'pointer' }} onClick={onClose}>X</button>
            {children}
        </div>
    </div>
);

const AddBookForm = ({ bookDetails, handleInputChange, handleAddBook }) => (
    <form onSubmit={handleAddBook}>
        <h2>Add Book</h2>
        <input type="text" name="bookName" value={bookDetails.bookName} onChange={(e) => handleInputChange(e, false)} placeholder="Book Name" required />
        <input type="text" name="authorName" value={bookDetails.authorName} onChange={(e) => handleInputChange(e, false)} placeholder="Author Name" required />
        <input type="text" name="bookNum" value={bookDetails.bookNum} onChange={(e) => handleInputChange(e, false)} placeholder="Book Number" required />
        <button type="submit">Add Book</button>
    </form>
);

const IssueBookForm = ({ issueDetails, handleInputChange, handleIssueBook }) => (
    <form onSubmit={handleIssueBook}>
        <h2>Issue Book</h2>
        <input type="text" name="bookName" value={issueDetails.bookName} onChange={(e) => handleInputChange(e, true)} placeholder="Book Name" required />
        <input type="text" name="memberId" value={issueDetails.memberId} onChange={(e) => handleInputChange(e, true)} placeholder="Member ID" required />
        <input type="date" name="issueDate" value={issueDetails.issueDate} onChange={(e) => handleInputChange(e, true)} placeholder="Issue Date" required />
        <input type="date" name="returnDate" value={issueDetails.returnDate} onChange={(e) => handleInputChange(e, true)} placeholder="Return Date" required />
        <button type="submit">Issue Book</button>
    </form>
);

const MemberList = ({ members, handleDelete }) => (
    <div>
        <h2>Members List</h2>
        {members.map(member => (
            <div key={member.id} style={{ marginBottom: '20px', border: '1px solid #ddd', padding: '10px', borderRadius: '5px' }}>
                <p>Name: {member.name}</p>
                <p>Email: {member.email}</p>
                <button onClick={() => handleDelete(member.id)}>Delete</button>
            </div>
        ))}
    </div>
);

export default AdminDashboard;
