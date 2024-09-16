import { Link, Outlet } from "react-router-dom";

const ListedBook = () => {
    return (
        <div>
            <div className=''>
                <h1 className="text-xl text-center font-bold my-3">Listed Book</h1>
                <div className="flex gap-3 my-3">
                    <Link to=''><h2 className='border-2 w-24 border-green-500 rounded-lg p-2'>Read list</h2></Link>
                    <Link to='wishListedBook'><h2 className='border-2 w-24 border-green-500 rounded-lg p-2'>Wish list</h2></Link>
                </div>
                <Outlet />

            </div>
        </div>
    );
};

export default ListedBook;