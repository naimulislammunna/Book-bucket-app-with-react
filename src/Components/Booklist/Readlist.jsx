import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getDataFromLocalStore } from "../../localStorage";
import ReadListBook from "./ReadListBook";

const Readlist = () => {
    const booksList = useLoaderData();
    const [item, setitem] = useState([]);

    useEffect(() => {
        const storedJob = getDataFromLocalStore();

        const appliedJob = storedJob.map(item => booksList.filter(job => job.id === item)) ;
        setitem(appliedJob);
        
    }, []);
    return (
        <div>
            <div>
                {
                    item.map(data => <ReadListBook key={data.id} data={data}></ReadListBook>)
                }
            </div>
        </div>
    );
};

export default Readlist;