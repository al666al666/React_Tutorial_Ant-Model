import React from 'react' ; 

export default function MyTitle(props) {
    const {title, p}= props 
    return(
        <div className = "mytitle_dash">  
            <h2> {title} </h2>
            <p> {p} </p>
        </div> 
    )
}