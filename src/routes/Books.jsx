import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Displays the covers of Dr Seuss books, with links to each book's detail page
function Bookshelf(){
    const [books, setBooks] = useState([]);

    // Fetching books from the Seuss API
    useEffect(() => {                                   
        fetch('https://seussology.info/api/books')
        .then(response => response.json())
        .then(json => {setBooks(json); console.log('fetchinging books...')} )
        }, [] );

    // *** Build ***
    return(
        <>
            <ul data-theme="light" className="grid gallery bookshelf">
                { 
                    books.map(book => 
                        <li key={book.id}> <Link to={`book/${book.id}`}> <img src={book.image} alt={book.title} /> </Link> </li>
                    
                )}
            </ul>
        </>
    )
}

export default Bookshelf;