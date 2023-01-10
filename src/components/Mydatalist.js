import React, {Fragment, useState} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'


function Mydatalist() {
const[sv,sf]=useState([]);
const mydata=()=>{
axios.get('https://jsonplaceholder.typicode.com/posts').then((res)=>{
console.log(res.data);
sf(res.data);
});
}

  return (
    <Fragment>
<h1>list of data</h1>
<button type='button' onClick={mydata}>fetch dat from api</button>
<div className='container'>
    <div className='row'>
<div className='col-12'>
<table className="table">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">User Id</th>
      <th scope="col">Title</th>
      <th scope="col">body</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {sv.map((e)=>{
        return (
            // sari row me json ka data aa jega.
            <tr key={e.id}>
            <th scope="row">{e.id}</th>
            <td>{e.userId}</td>
            <td>{e.title}</td>
            <td>{e.body}</td>
            <td><button className='btn btn-primary btn-sm'>Action</button></td>
          </tr>
        )
    })}
    
   
  </tbody>
</table>

</div>
    </div>
</div>

    </Fragment>
  )
}

export default Mydatalist
