import Ipost from "./Ipost";

const addAcolor = (ListOfObjects: Ipost[]) => {
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

export default addAcolor