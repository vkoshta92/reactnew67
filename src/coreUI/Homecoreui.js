import React from 'react';
import './global.css'
import Myclass from '../components/About'
function Homecoreui(){
// a ki jgh pr text number array object function html element component kuch bhi de skte hai,pr html aur compnent me jsx form me convert ho jata hai.
 const a=8000;  
 const b="this is heading"; 
//  variable ke andr kuch bhi kr skte h h1 tag ya jo phke myclass bnai thi vo class ya koi function
 const c=<h1 className='abc'>this is jsx {a} format</h1>
 const d=<Myclass />
return(
<div>
    <div className='mynav'>
        <ul>
<li><a href='http://google.com'>Home</a></li>
<li><a href='http://google.com'>Home</a></li>
<li><a href='http://google.com'>Home</a></li>
<li><a href='http://google.com'>Home</a></li>
<li><a href='http://google.com'>Home</a></li>
<li><a href='http://google.com'>Home</a></li>
<li><a href='http://google.com'>Home</a></li>


        </ul>



    </div>

<section className='rownew'>
<h1>{a}</h1>
<h2>{b}</h2>
{c}
{d}
</section>


    </div>

)



}

export default Homecoreui