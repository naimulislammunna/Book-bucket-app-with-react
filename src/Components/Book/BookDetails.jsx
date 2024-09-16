import { useLoaderData, useParams } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";
import { IoPeopleOutline } from "react-icons/io5";
import { FiBookOpen } from "react-icons/fi";
import { saveDataToLs } from "../LocalStorage/LocalStorage";
import { setDataToLocalStore, setDataToLocalStoreWish } from "../../localStorage";

const BookDetails = () => {

    const books = useLoaderData();

    const { bookID } = useParams();
    const intID = parseInt(bookID);
    const book = books.find(book => book.id == intID);

    const handleRead = (id) => {
        setDataToLocalStore(id);
    }
    const handleWishList = (id) =>{
        setDataToLocalStoreWish(id);
    }

    const { id,
        bookName,
        author,
        category,
        review,
        tags,
        totalPages,
        publisher,
        yearOfPublishing,
        rating,
        image } = book;
    console.log(bookID, book);
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl my-10 ">
                <div className="flex w-full justify-center items-center bg-gray-300 rounded-lg"><img src={image} className="w-3/4 h-auto" alt="book" /></div>
                <div className="card-body">
                    <h2 className="card-title text-3xl font-semibold">{bookName}</h2>
                    <p>By :{author}</p>
                    <p className="border-y-2 border-dashed py-2"> {category}</p>
                    <p className="font-bold">Review : <span className="font-normal">{review}</span></p>
                    <p className="font-bold py-7 border-b-2 border-dashed">Tag :
                        <span className="badge badge-outline bg-gray-300 px-6 py-5 border-none text-lg text-green-600 font-semibold rounded-lg mx-3">{tags[0]}</span>
                        <span className="badge badge-outline bg-gray-300 px-6 py-5 border-none text-lg text-green-600 font-semibold rounded-lg">{tags[1]}</span>
                    </p>
                    <div className="flex gap-10 mt-5">
                        <div>
                            <p>Number Of Pages:</p>
                            <p>Publisher: </p>
                            <p>Year Of Publishing :</p>
                            <p>Rating :</p>
                        </div>
                        <div className="font-semibold">
                            <p>{totalPages}</p>
                            <p>{publisher}</p>
                            <p>{yearOfPublishing}</p>
                            <p>{rating}</p>
                        </div>
                    </div>
                    <div className="card-actions justify-end">
                        <button onClick={() => handleRead(id)} className="btn btn-primary text-lg bg-gray-200 text-black border-none">Raed</button>
                        <button onClick={() => handleWishList(id)} className="btn btn-primary text-lg bg-blue-500 border-none">Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;