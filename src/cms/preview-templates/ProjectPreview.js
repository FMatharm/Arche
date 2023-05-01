import React from 'react'

function objectIsEmpty (obj) {
    return Object.values(obj).every(val => val === null || val === '')
}

function ProjectPreview({entry, getAsset}) {
    const data = entry.getIn(["data"]).toJS()
    
    if (!objectIsEmpty(data)) {
        const image = getAsset(data.thumbnail)
        return (
            <div style={{
                height: "calc(100vh - 16px)", 
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#212121"
                }}>
                <div id='card-preview' style={{
                    width: "340px",
                    height: "340px",
                    backgroundColor: "white",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    borderRadius: "20px",
                    padding: "10px"
                }}>
                    <h2 style={{fontFamily: "sans-serif", color: "black", fontWeight: 100, margin: "10px 0", fontSize: "24px"}}>{data.title}</h2>
                    <img src={image} alt={data.title + " project preview"} style={{width: "90%", border: "2px solid black", height: "220px"}}/>
                    <p style={{width: "100%",flexGrow: "1", margin: "10px 0", overflowWrap: "break-word", fontFamily: "sans-serif", textAlign: "center"}}>{data.description}</p>
                </div>
            </div>
        )
    } else {
        return (
        <div id='empty-preview' style={{
            height: "calc(100vh - 16px)", 
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <h2 style={{fontFamily: "sans-serif", color: "silver", fontSize: "36px"}}>Emptiness...</h2>
        </div>
        )
    }
}

export default ProjectPreview