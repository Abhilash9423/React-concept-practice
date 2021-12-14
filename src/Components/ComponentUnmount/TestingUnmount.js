import React,{useState,useEffect} from 'react';

function TestingUnmount(props) {
    const [count,setCount] =useState(0)

    const clickHandler = () =>{
        setCount(count+1)
    }

    useEffect(()=>{
        console.log("initial")
 
        return ()=>{
            console.log("unmounting phase")
         }
     })


    return (
        <div>
            <h1>{count}</h1>
            <button onClick={clickHandler} > test  </button>
        </div>
    );
}

export default TestingUnmount;


/* 
initially the component is rendered and return statement is not called, before every update the unmount is called and them useeffect is executed
Here when we click the button first the return is executed unmounting() and then the useeffect is called     */ 