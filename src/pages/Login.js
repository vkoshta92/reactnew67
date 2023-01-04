import React from 'react'
import './mystyle.css';
import {Link} from 'react-router-dom'

function Login(){
  return (
    <div className='mylogin'>
      <div>
        <ul>
          <li>
            <input type="text" placeholder='username'/>
            <input type="password" placeholder='password'/>
            {/* a means link hota hai,href ki jgh to use hota h */}
            <li><Link to="dashboard"><button type='button'>submit</button></Link></li>
          </li>
        </ul>
      </div>
    </div>
  )
}
export default Login
