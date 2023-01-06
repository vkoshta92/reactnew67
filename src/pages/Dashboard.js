import React, {useState} from 'react'
import Mynav from './Mynav'
import { Mychild } from './Childcomponent';

function Dashboard() {
  const a=20
  // const b=prompt("enter name")
  // use state ke andr  default value h isko jgh num number kuch bhi de  skte hai., kuch bhi pass k skte h no array etc
  const [statevariable,statefunction]=useState(0);
  const myfunction=()=>{
    statefunction("ducat india");
  }

  const [intv,intf]=useState(0);
const[c,b]=useState(0);
// 8 ke bd ye message aa jega. isko password bgera me use kr skte hai.
    if(c>8)
    {
      alert("this is greater than")
    }



  const myinput=(u)=>{
    // target se value ko change bhi kr skte hai.
    intf(u.target.value);
    console.log(u.target.value);
    // hm u ke  sth target ke tsh kuch bhi print krwa skte hai.
    console.log(u)
    console.log(u.nativeEvent.data)
    // b  state ke function me u ka kuch bhi pass kra skte h aur uski khi bhi  call krake print kra skte hai.
    b(u.nativeEvent.data);
    // b(u.target.value)
  }
  return (
  // render ke andr jo andr jo hota h xml, jsx, tsx hota h, jo render ke bahar hota h vo javascript or ts hota hai. 

    <div>
         <Mynav />
     <h1>Welcome to Dashbord</h1>



<h1>{a}</h1>
<h1 onClick={myfunction}>{statevariable}</h1>
<input type="text" value={intv} onInput={myinput}/>
<p>{intv}</p>
<h1>{c}</h1>
<Mychild/>

    </div>
  )
}
export default Dashboard