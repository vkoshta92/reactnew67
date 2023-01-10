import React, { Fragment } from 'react'
import {useForm} from 'react-hook-form'


function MynewPage() {
    // https://www.npmjs.com/package/react-hook-form
    const {register,handleSubmit,formState: { errors },} = useForm();
    // const {register1,handleSubmit1} = useForm();
//         handleSubmit1=(e)={
// console.log(e.target.value)
//         }
  return (
    <div>
<form onSubmit={handleSubmit((data)=>console.log(data))}>
{/* <form onSubmit={handleSubmit}> */}
<ul>
    <li><input type="text" placeholder='firstname' {...register('firstname')}/></li>
    <li><input type="text" placeholder='lastname' {...register('lastname')}/></li>
    <li><input type="text" placeholder='email' {...register('email')}/></li>
    <li><input type="text" placeholder='password' {...register('password')}/></li>
    <li><button type='submit'>Submit</button></li>
</ul>


</form>


{/* <form onSubmit={handleSubmit1}>
<ul>
    <li><input type="text" placeholder='firstname' {...register1('firstname')}/></li>
    <li><input type="text" placeholder='lastname' {...register1('lastname')}/></li>
    <li><input type="text" placeholder='email' {...register1('email')}/></li>
    <li><input type="text" placeholder='password' {...register('password')}/></li>
    <li><button type='submit'>Submit</button></li>
</ul>


</form> */}


<Mynewform/>
    </div>

      
    
  )
}

export default MynewPage

export const Mynewform=()=>{
    return(
<Fragment>
<form>
<ul>
    <li><input type="text" placeholder='firstname' /></li>
    <li><input type="text" placeholder='lastname' /></li>
    <li><input type="text" placeholder='email' /></li>
    <li><input type="text" placeholder='password'/></li>
    <li><button type='button'>Submit</button></li>
</ul>

</form>

</Fragment>

    )
}