import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {
    const [pages, setPages] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get("https://jsonplaceholder.typicode.com/posts")
            console.log(request.data)
            setPages(request.data)
        }
        fetchData()
    }, [])

    return (
        <div>
            Home Page
        </div>
    );
}

export default Home