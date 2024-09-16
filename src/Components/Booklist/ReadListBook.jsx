import { Link } from "react-router-dom";

const ReadListBook = ({data}) => {
    const {id,
        bookName,
        author,
        category,
        review,
        tags,
        totalPages,
        publisher,
        yearOfPublishing,
        rating,
        image } = data[0];
    return (
        <div>
            <div className="container">
                <div className="border border-gray-500 px-7 py-5 flex gap-20">
                    <div className="mb-5 flex items-center w-32">
                        <img src={image} alt="" />
                    </div>
                    <div className="w-full">
                        <h1 className="text-xl font-medium mb-1">Book Name:{bookName}</h1>
                        <h3>Author: {author}</h3>
                        <div className="flex gap-2 my-3">
                            {
                                tags.map((tag, idx ) => <p 
                                key={idx} className="px-4 py-2 rounded-full bg-gray-200 text-green-600 font-semibold">#{tag}</p>)
                            }
                        </div>
                        <div className="flex gap-10 mb-4">
                            <h3>Total pages: {totalPages}</h3>
                            <h3>Publisher: {publisher}</h3>
                        </div>
                        <div className="flex justify-end">
                            <Link to={`/book/${id}`}><button className="btn">View Details</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReadListBook;