import { useLoaderData } from "react-router-dom";
import Book from "./Book";

const Books = () => {
    const book = useLoaderData();
    return (
        <div>
            <h1>Books</h1>
            <div className="grid grid-cols-3 gap-y-7">
                {
                    book.map( book => <Book book={book} key={book.id}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;