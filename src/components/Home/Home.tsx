import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom'



function Home() {
    // interface Ipost {
    //     [index: number]: object
    // }
    const [posts, setPosts] = useState<any | undefined>([]);
    const [page, setPage] = useState<any | undefined>([]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(res => {
                console.log(res)
                setPosts(res.data)
            })
            .then(() => setPage(posts.slice(0, 5)))
            .catch(err => {
                console.log(err)
            })
    }, [page])

    return (
        <div>
            <ul>
                {
                    page.map((post: {
                        id: number | undefined,
                        title: string | undefined
                    }) => <li key={post.id}>{post!.title}</li>)
                }
            </ul>
            <li><Link to={`/`}>Back</Link></li>
            <li><Link to={`/`}>Forward</Link></li>
        </div>
    );
}

export default Home