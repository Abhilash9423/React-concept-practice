import React,{useState,useEffect} from 'react'

function TestuseEffect(){
  const[count,setCount] = useState(0)

  useEffect(()=>{
    console.log(`count ${count} `)
    return ()=>{
        console.log("return in useeffect function")
    }
  })


return(
  <div>
  <p>learn two</p>
  <button  onClick={()=>setCount(count+1)}>
  click Me {count}
  </button>
  </div>
)

}

export default TestuseEffect