import * as React from 'react';


import Search from './Search/Search'
import ListOutput from './ListOutput/ListOutput'
import PageSelection from './PageSelection/PageSelection'


function Main() {

    return (
        <div>
            <Search />
            <ListOutput />
            <PageSelection />
        </div>
    )

}

export default Main