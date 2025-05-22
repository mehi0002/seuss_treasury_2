import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

// Displays the details of a Seuss book
function Book(){

    /*** States ***/
    const params = useParams();
    const [book, setBook] = useState([]); 

    /*** Loading ***/
    useEffect(() => {                                           // Fetch Book info from Seussology API
        fetch('https://seussology.info/api/books/' + params.id)
            .then(response => response.status === 200 ? response.json() : navigate('/'))
            .then(json => {
            setBook({
                title: json.title,
                id: json.id,
                image: json.image,
                desc: json.description
            })
            })
        }, [] )

    /*** Build ***/
    return(
        <article className="grid book">
            <h2>{book.title}</h2>
            <img src={book.image} alt={book.title} />
            <p>{book.desc}</p>
        </article>
    );
}

export default Book;