import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getDataFromLocalStoreWish } from '../../localStorage';
import WishListBook from './WishListBook';
import { Link } from "react-router-dom";

const Wishlist = () => {
    const booksList = useLoaderData();
    const [item, setitem] = useState([]);

    useEffect(() => {
        const storedJob = getDataFromLocalStoreWish();

        const appliedJob = storedJob.map(item => booksList.filter(job => job.id === item)) ;
        setitem(appliedJob);
        
    }, []);

    return (
        <div>
            <div>
                {
                    item.map(data => <WishListBook key={data.id} data={data}></WishListBook>)
                }
            </div>
        </div>
    );
};

export default Wishlist;