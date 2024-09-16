import { Link } from "react-router-dom";

const Book = ({ book }) => {
    const { bookName, author, rating, tags, category, image } = book;
    return (
        <Link to={`/book/${book.id}`}>
            <div className="card w-80 bg-base-100 border border-gray-300 rounded-lg flex-grow">
                <div className="p-4">
                    <div className="bg-gray-300 rounded-lg h-[250px] w-auto flex justify-center items-center">
                        <img src={image} alt="book" className=" h-3/4 w-auto m-auto" />
                    </div>
                    <div className="card-actions justify-start mt-7">
                        <div className="badge badge-outline bg-gray-300 px-6 py-5 border-none text-lg text-green-600 font-semibold rounded-lg">{tags[0]}</div>
                        <div className="badge badge-outline  bg-gray-300 px-6 py-5 border-none text-lg text-green-600 font-semibold rounded-lg">{tags[1]}</div>
                    </div>
                    <div className="card-body p-0 my-6">
                        <h2 className="card-title">
                            {bookName}
                            <div className="badge badge-secondary">{rating}</div>
                        </h2>
                        <p>By {author}</p>
                        <p className=" text-xl font-semibold pt-5 mt-4 border-dashed border-t-2 border-green-600 ">{category}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;