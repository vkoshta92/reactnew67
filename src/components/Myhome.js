import React, { Fragment } from "react";

function Home()
{
    // return 5000
    // 5000 ki jgh pe text  , number , variable, object, aray,html elements, component, functionm sb use kr skr skte hai.
    // html elements and component me ye .jsx (xml ) bn jega.

//     return(
//         <h1>welcome</h1>
//         // <h2>vishnu</h2>
// )


// return(
//     <div>
//     <h1>welcome</h1>
//     <h2>vishnu</h2>
//     </div>
// )

// fragment- iski jgh pe blank bhi use kr skte h pr fragment hi krenge.
// fragment wrap krta h elements ko.
const a=500;
const b=800;
const c="Rohit";
return(
<Fragment>
    <h1>welcome{10+20}</h1>
    <h1>welcome{a+30}</h1>
    <h2>vishnu{a+b} {a} and {b} and{c}</h2>
</Fragment>
)


// return hmesa siingle ko return krega 2 ko nhi  isliye h2 vle me error aa jega.agr div se wrap kr denge error nhi ayega
// div nhi chiye aur wrap bhi krna h to fragment use krenge.

}

export default Home