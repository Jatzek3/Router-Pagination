import Ipost from './Ipost';

const filterWord = (searchingFor: string, postsList: Ipost[]) => {
    if (searchingFor === "") {
        return postsList
    } else {
        return postsList.filter((post: Ipost) => {
            return post.title.toLowerCase().includes(searchingFor.toLowerCase())
        })
    }
}

export default filterWord
