import React from 'react'
import  LinearProgress  from '@material-ui/core/LinearProgress'

export default function Titles(props) {

    const data = props
    console.log("received props in title.js", data)

    // if (!data) {
    //     return (
    //         <LinearProgress /> 
    //     )
    // } else {

    return (
        <> </>
        
    //     <div className='d-flex flex-row flex-wrap'>
    //     {data &&
    //       data.map((item, idx) => {
    //         return (
    //           <div className='d-flex flex-column flex-wrap' key={idx} style={{ maxWidth: "30vw", margin: '5vw' }}>
    //             <img style={{maxWidth: '30vw'}} src={data[idx].cover} alt={data[idx].title} />
    //             <p>{data[idx].title}</p>
    //           </div>
    //         );
    //       })}
    //   </div>
        
    )
 }

    
