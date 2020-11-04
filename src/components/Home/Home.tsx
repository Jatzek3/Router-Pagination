import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom'

import axios from 'axios';

import { Button, ListGroup, ListGroupItem, Input } from 'reactstrap';
import './Home.scss';

function Home() {
    // interface Ipost {
    //     [index: number]: object
    // }
    const [posts, setPosts] = useState<any | undefined>([]);

    const [filtered, setFiltered] = useState<object[] | undefined>([])
    const [search, setSearch] = useState<string | undefined>('')

    const [page, setPage] = useState<any | undefined>([]);


    const { pageNumber }: { pageNumber: string | undefined } = useParams()
    const siteNumber: number = pageNumber ? Number(pageNumber) : 1

    const start = siteNumber * 5
    const stop = (siteNumber + 1) * 5;
    const previousSite = (siteNumber - 1 > 0) ? siteNumber - 1 : 0;
    const nextSite = siteNumber + 1

    useEffect(() => {
        // This could be better if key was generated on on filtering than from Api
        // the you could display any input whith bachground colored
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
        // Im not sure about this
        setFiltered(!search ? posts : posts.filter(
            (post: { title: any; }) => { return post.title.toLowerCase().includes(search.toLowerCase()) }))
        setPage(filtered!.slice(start, stop))
        console.log(search)
    }, [pageNumber, posts, search])




    return (
        <div>
            <Input type="text"
                placeholder="Search"
                value={search}
                onChange={event =>
                    setSearch(event.target.value)}>
            </Input>
            <ListGroup>
                {
                    page.map((post: {
                        id: number | undefined,
                        title: string | undefined
                    }) => <ListGroupItem
                        key={post.id}
                        color={(post.id && post.id % 2 !== 0) ? "success" : "warning"}
                    >{post!.title}</ListGroupItem>)
                }
            </ListGroup>
            {/* A little problem that on start it display blank page instead of 1st */}
            <Button color="secondary"><Link to={`/${previousSite}`}>Back</Link></Button>
            <Button color="secondary"><Link to={`/${nextSite}`}>Forward</Link></Button>
        </div>
    );
}

export default Home