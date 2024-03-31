const getSavedData = () => {

    const getData = localStorage.getItem("appliedJob");

    if (getData) {
        return JSON.parse(getData)
    }

    return []
}

const saveJobApplication = (id) => {

    const savedApplication = getSavedData()

    const exist = savedApplication.find( jobId => jobId === id);

    if (!exist) {
        savedApplication.push(id)
        localStorage.setItem("appliedJob", JSON.stringify(savedApplication))
    }
}

export {saveJobApplication, getSavedData}