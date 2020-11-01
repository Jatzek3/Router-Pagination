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


    const [search, setSearch] = useState<string | undefined>('')
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
        // setFiltered(!search ? posts : posts.filter(
        //     (post: { title: any; }) => { return post.title.includes(search.toLowerCase()) }))
        setFiltered(posts)
        setPage(filtered!.slice(start, stop))
        console.log(search)
    }, [pageNumber, posts, search])




    return (
        <div>
            {/*setSearch(search! + e)*/}
            <input type="text" placeholder="Search"
                onChange={event => setSearch(search + event.target.value)}></input>
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