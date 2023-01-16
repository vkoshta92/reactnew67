import React, { useEffect,useState} from 'react'

function Fetchdata() {
    fetch('https://jsonplaceholder.typicode.com/posts').then((res)=>{
        // json nhi likhenge to use nhi pta chlega ki promise return krega ya nhi. ye hmesa promise me  data deta hai.
            console.log(res.json());
            b(res.json());
            },[]);
    const[a,b]=useState([]);
           
          
  return (


    <>
    <h1>fetch data</h1>
    <h2>data:{a}</h2>
    
    
    </>
  )
}

export default Fetchdata
