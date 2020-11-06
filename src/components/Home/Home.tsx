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
    const [posts, setPosts] = useState<object[] | undefined>([])
    const [filtered, setFiltered] = useState<object[] | undefined>([])
    const [colored, setColored] = useState<object[] | undefined>([])
    const [page, setPage] = useState<object[] | undefined>([]);

    const [search, setSearch] = useState<string | undefined>('')

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
        setFiltered(!search ? posts : posts!.filter(
            (post: any) => { return post.title.toLowerCase().includes(search.toLowerCase()) }))
        setColored(addAcolor(filtered!))
        setPage(colored!.slice(start, stop))
        console.log(search, pageNumber, start, stop)
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
                    page!.map((post: any) => <ListGroupItem
                        className={"list-item"}
                        key={post.id}
                        color={post.color}
                    >{post!.title}</ListGroupItem>)
                }
            </ListGroup>
            {/* A little problem that on start it display blank page instead of 1st */}
            <Link to={`/${previousSite}`}><Button color="primary">Back</Button></Link>
            <Link to={`/${nextSite}`}><Button color="primary">Forward</Button></Link>
        </div>
    );
}

export default Home


const addAcolor = (ListOfObjects: object[]) => {
    let newListOfObjects = []
    for (let i = 0; i < ListOfObjects.length; i++) {
        if (i % 2 === 0) {
            const newObject = { ...ListOfObjects[i], color: 'success' }
            newListOfObjects.push(newObject)
        }
        else {
            const newObject = { ...ListOfObjects[i], color: 'warning' }
            newListOfObjects.push(newObject)
        }
    }
    return newListOfObjects
}
