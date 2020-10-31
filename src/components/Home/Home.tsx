import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import './Home.scss';

import { Link } from 'react-router-dom'



function Home() {
    // interface Ipost {
    //     [index: number]: object
    // }
    const [posts, setPosts] = useState<any | undefined>([]);
    const [filtered, setFiltered] = useState<object[] | undefined>([])
    const [page, setPage] = useState<any | undefined>([]);


    const { pageNumber }: { pageNumber: string | undefined } = useParams()

    const siteNumber: number = pageNumber ? Number(pageNumber) : 1

    const start = siteNumber * 5
    const stop = (siteNumber + 1) * 5;
    const previousSite = (siteNumber - 1 > 0) ? siteNumber - 1 : 0;
    const nextSite = siteNumber + 1

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

    useEffect(() => {
        setPage(posts.slice(start, stop))
        console.log(page, start, stop)
    }, [pageNumber, posts])




    return (
        <div>
            <input type="text" placeholder="Search"></input>
            <ul>
                {
                    page.map((post: {
                        id: number | undefined,
                        title: string | undefined
                    }) => <li
                        key={post.id}
                        className={(post.id && post.id % 2 !== 0) ? "list__item--black" : "list__item--red"}
                    >{post!.title}</li>)
                }
            </ul>
            <li><Link to={`/${previousSite}`}>Back</Link></li>
            <li><Link to={`/${nextSite}`}>Forward</Link></li>
        </div>
    );
}

export default Home