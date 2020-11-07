import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom'
import axios from 'axios';

import Ipost from './utils/Ipost';
import addAcolor from './utils/addColor';


import { Button, ListGroup, ListGroupItem, Input } from 'reactstrap';
import './Home.scss';


function Home() {

    const [posts, setPosts] = useState<Ipost[]>([])
    const [page, setPage] = useState<Ipost[]>([]);

    const [search, setSearch] = useState<string>('')

    const { pageNumber }: { pageNumber: string } = useParams()
    const siteNumber: number = pageNumber ? Number(pageNumber) : 0

    const start = siteNumber * 5
    const stop = (siteNumber + 1) * 5;
    const previousSite = (siteNumber - 1 > 0) ? siteNumber - 1 : 0;
    const nextSite = siteNumber + 1

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(res => {
                setPosts(res.data)
                setPage(res.data.slice(0, 5))
            })
            .catch(err => {
                console.log(err)
            })
    }, [])



    useEffect(() => {
        const filt = !search ? posts :
            posts!.filter((post: Ipost) => {
                return post.title.toLowerCase().includes(search.toLowerCase())
            })
        setPage(addAcolor(filt).slice(start, stop))
        console.log(posts, page, "use effect sideE")
    }, [posts, pageNumber, search])





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
                    page.length !== 0 ? page.map((post: Ipost) => <ListGroupItem
                        className={"list-item"}
                        key={post.id}
                        color={post.color}
                    >{post!.title}</ListGroupItem>)
                        :
                        <h1> No ones here</h1>
                }
            </ListGroup>
            {/* A little problem that on start it display blank page instead of 1st */}
            <Link to={`/${previousSite}`}><Button disabled={!siteNumber ? true : false} color="primary">Back</Button></Link>
            <Link to={`/${nextSite}`}><Button disabled={nextSite * 5 >= posts!.length ? true : false} color="primary">Forward</Button></Link>
        </div>
    );
}

export default Home

