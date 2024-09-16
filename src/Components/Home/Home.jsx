import Hero from "../HeroSection/Hero";
import Books from "../Book/Books";
import { useLoaderData } from "react-router-dom";
import Book from "../Book/Book";

const Home = () => {
    const book = useLoaderData();
    return (
        <div>
            <Hero/>
            <h1>Books</h1>
            <div className="grid grid-cols-3 gap-y-7">
                {
                    book.map( book => <Book book={book} key={book.id}></Book>)
                }
            </div>
        </div>
    );
};

export default Home;