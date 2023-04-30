import React from 'react'

function objectIsEmpty (obj) {
    return Object.values(obj).every(val => val === null || val === '')
}

function ProjectPreview({entry, getAsset}) {
    const data = entry.getIn(["data"]).toJS()
    
    if (!objectIsEmpty(data)) {
        const image = getAsset(data.thumbnail)
        return (
            <div id='card-preview'>
                <h1>{data.title}</h1>
                <img src={image} alt={data.title + " project preview"}/>
            </div>
        );
    } else {
        return <div id='empty-preview'>Emptiness...</div>
    }
}

export default ProjectPreview