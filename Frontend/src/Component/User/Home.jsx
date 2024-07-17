import React from 'react'
import Userdash from './Userdash'

const Home = () => {
    return (
        <div style={{ display: "flex" }}>
            <Userdash />
            <div>
                <div>
                    <h1 style={{ textAlign: 'center', margin: '20px 0' }}>Issued Books By You</h1>

                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start', flexWrap: 'wrap' }}>
                        {/* Book Card 1 */}
                        <div style={{ width: 'fitcontent', maxWidth: '600px', margin: '20px', border: '1px solid #ccc', borderRadius: '8px', padding: '20px' }}>
                            <h2 style={{ marginBottom: '10px' }}>Book Name: New</h2>
                            <p>Author: Author Name</p>
                            <p>Issued Date: 11/12/24</p>
                            <button style={{ marginTop: '10px', backgroundColor: '#007bff', color: '#fff', border: 'none', padding: '8px 16px', borderRadius: '4px', cursor: 'pointer' }}>Return Book</button>
                        </div>

                        {/* Book Card 2 */}
                        <div style={{ width: 'fitcontent', maxWidth: '600px', margin: '20px', border: '1px solid #ccc', borderRadius: '8px', padding: '20px' }}>
                            <h2 style={{ marginBottom: '10px' }}>Book Name: New</h2>
                            <p>Author: Author Name</p>
                            <p>Issued Date: 11/12/24</p>
                            <button style={{ marginTop: '10px', backgroundColor: '#007bff', color: '#fff', border: 'none', padding: '8px 16px', borderRadius: '4px', cursor: 'pointer' }}>Return Book</button>
                        </div>

                        {/* Book Card 3 */}
                        <div style={{ width: 'fitcontent', maxWidth: '600px', margin: '20px', border: '1px solid #ccc', borderRadius: '8px', padding: '20px' }}>
                            <h2 style={{ marginBottom: '10px' }}>Book Name: New</h2>
                            <p>Author: Author Name</p>
                            <p>Issued Date: 11/12/24</p>
                            <button style={{ marginTop: '10px', backgroundColor: '#007bff', color: '#fff', border: 'none', padding: '8px 16px', borderRadius: '4px', cursor: 'pointer' }}>Return Book</button>
                        </div>

                    </div>
                </div>

                <div>
            <h1 style={{ textAlign: 'center', margin: '20px 0' }}>Related To You</h1>

            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
                {/* Book Card 1 */}
                <div style={{ width: 'fit-content', maxWidth: '600px', margin: '20px', border: '1px solid #ccc', borderRadius: '8px', padding: '20px' }}>
                    <h2 style={{ marginBottom: '10px' }}>Book Name: New</h2>
                    <p>Author Name: XYZ</p>
                    <button style={{ marginTop: '10px', backgroundColor: '#007bff', color: '#fff', border: 'none', padding: '8px 16px', borderRadius: '4px', cursor: 'pointer' }}>Borrow Book</button>
                </div>

                {/* Book Card 2 */}
                <div style={{ width: 'fit-content', maxWidth: '600px', margin: '20px', border: '1px solid #ccc', borderRadius: '8px', padding: '20px' }}>
                    <h2 style={{ marginBottom: '10px' }}>Book Name: New</h2>
                    <p>Author Name: XYZ</p>
                    <button style={{ marginTop: '10px', backgroundColor: '#007bff', color: '#fff', border: 'none', padding: '8px 16px', borderRadius: '4px', cursor: 'pointer' }}>Borrow Book</button>
                </div>

                {/* Book Card 3 */}
                <div style={{ width: 'fit-content', maxWidth: '600px', margin: '20px', border: '1px solid #ccc', borderRadius: '8px', padding: '20px' }}>
                    <h2 style={{ marginBottom: '10px' }}>Book Name: New</h2>
                    <p>Author Name: XYZ</p>
                    <button style={{ marginTop: '10px', backgroundColor: '#007bff', color: '#fff', border: 'none', padding: '8px 16px', borderRadius: '4px', cursor: 'pointer' }}>Borrow Book</button>
                </div>

            </div>
        </div>
            </div>
        </div>
    )
}

export default Home