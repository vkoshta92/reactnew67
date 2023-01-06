import React,{useState} from 'react'
import './mystyle.css';
import {Link} from 'react-router-dom'

function Login(){

const[user,setuser]=useState("Admin");
// data ko local storage me save kr diya ab jha che cha le jao , pr direct bina props ke nhi le ja skte hai.
const abc=(e)=>{
  setuser(e.target.value);
  console.log(user)
  localStorage.setItem('username',user);
  sessionStorage.setItem('clientid',user)
}

  return (
    <div className='mylogin'>
      <div>
        <ul>
          <li>
            <input type="text" value={user} placeholder='username' onInput={abc}/></li>
           <li> <input type="password" placeholder='password'/></li>
            {/* a means link hota hai,href ki jgh to use hota h */}
            <li><Link to="dashboard"><button type='button'>submit</button></Link></li>
          
        </ul>
      </div>
    </div>
  )
}
export default Login
