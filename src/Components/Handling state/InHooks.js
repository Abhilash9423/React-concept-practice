import React,{useState} from 'react';


function InHooks(){
  const [name,setName] = useState({firstName:'',lastName:''})


const clickHandler =(e) =>{
    setName({...name,firstName:e.target.value})
  }

  return(
    <div>
   <input
      type="text" 
      value={name.firstName} 
      onChange={clickHandler} 
   />
   <input
      type='text'
      value={name.lastName}
      onChange={e=>setName({...name,lastName:e.target.value})}
   />
   <h2> your first name {name.firstName} </h2>
   <h2> your last name {name.lastName}</h2>
   </div>
  )
}

export default InHooks