import React from 'react'

function ProjectPreview({entry, getAsset}) {
    const data = entry.getIn(["data"]).toJS();
    
    if (data) {
        return <div>Theres something here</div>
    } else {
        return <div>Loading...</div>
    }
}

export default ProjectPreview;