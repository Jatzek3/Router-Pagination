import React, { useEffect, useState } from 'react';
import axios from 'axios';



function Home() {
    // interface Iposts {
    //     [index: number]: object
    // }
    const [posts, setPosts] = useState<any | undefined>([]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(res => {
                console.log(res)
                setPosts(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <div>
            <ul>
                {
                    posts.map((post: {
                        id: number | undefined,
                        title: string | undefined
                    }) => <li key={post.id}>{post!.title}</li>)
                }
            </ul>
        </div>
    );
}

export default Home