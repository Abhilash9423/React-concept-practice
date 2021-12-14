import React,{useState,useEffect} from 'react';

function CounterOnHooks(props) {

    const [count,setCount] = useState(0)
    const [timerOn,setTimerOn] = useState(false)
    
    
    const onStart = () => {
        setTimerOn(true)
        console.log("start clicked")
    }

    const onStop = () =>{
        setTimerOn(false)
        console.log("stop clicked")
    }

    const onReset = () =>{
        setTimerOn(false)
        setCount(0)
        console.log("reset clicked")
    }
    
    useEffect(()=>{
       
        let timer =null;
        if(timerOn){
        console.log("first timer",timer)
        console.log("fist count", count)
         timer = setInterval(()=>{
             console.log("timer created ",timer)
            setCount(prev => prev+1)
        },1000)
    }   else{
        console.log("second timer",timer)
        console.log("second count",count)

        clearInterval(timer)
    }
        return(()=>{
            
            console.log("removing timer",timer)
            console.log("third count",count)
            clearInterval(timer)
        })
    },[timerOn])



    return (
        <div>
            <h1>{count}</h1>
            <button onClick={onStart} >start</button>
            <button onClick={onStop} >stop</button>
            <button onClick={onReset}>    reset</button>
        </div>
    );
}

export default CounterOnHooks;


/*
        Initially it useeffect renders as there timeron is off it executes the else block 
        when we click start it executes the return statement(unmount)  of the useeffect function to unmount and then rerenderes (update) the useeffect function start the timer
        when we click stop or reset it executes the return statement(unmount ) of the useeffect function to unmount and then rerenders (update) and executes the else block
*/