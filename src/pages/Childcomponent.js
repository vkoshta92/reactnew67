import React, { useEffect, useState } from 'react'

// is trf export krenge to ise name export bolenge
export const Mychild=()=>{

const[a,b]=useState(0);

// for session storage
const[x,y]=useState();

 useEffect(()=>{
    console.log("hello")
    b(localStorage.getItem('username'))
    y(sessionStorage.getItem('clientid'));
 })   
return(
    <>
    <h1> welcome to child component</h1>
    <h2>Username is: {a}</h2>
    <h2>ClientId:{x}</h2>
    </>
)

}