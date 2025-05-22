import { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";

// Displays 10 random Dr Seuss Quotes and links to the realated book description page
export default function Quotes(){

    /*** States ***/
    const [quotes, setQuotes] = useState([]);
    
    /*** Loading ***/
    useEffect( () => {
        fetch('https://seussology.info/api/quotes/random/10')
        .then( response => response.status === 200 ? response.json() : Navigate('/'))
        .then( json => {console.log(json); setQuotes(json)} )
    }, []);

    /*** Build ***/
    return(
        <>
            <ul className="grid gallery quotes">
                    { quotes.map((quote, index) => 
                            <li key={index}> 
                                <Link to={`/book/${quote.book.id}`} className="quote-link quote-container"> 
                                    <blockquote>{quote.text}</blockquote>
                                    <cite>{quote.book.title}</cite> 
                                </Link> 
                            </li>
                        )
                    } 
            </ul>
        </>
    );
    
}