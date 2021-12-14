import React,{useState} from 'react';

function Slides(props) {

    const slides = [{'title':'first title','text':"frist one text"}, 
                {'title':'Second title','text':"second one text"}, 
                {'title':'third title','text':"third one text"}, 
                {'title':'fourth title','text':"fourth one text"}, 
                {'title':'fifth title','text':"fifth one text"}]
    const [count,setCount] = useState(0)
    const change = 1
    const changeHandler = (name,change) => {
        if(name==='prev'){
            if(count-change<0){
                return
            }
            else{
                setCount(count-change)
            }
        }
        else if(name==='Next'){
            if(count+change>4){
                return
            }
            else{
                setCount(count+change)
            }
        }

    }



    return (
        <div>

            <div>
                <button onClick={()=>setCount(0)} >reset</button>
                <button onClick={()=>changeHandler("Next",change)}>next</button>
                <button onClick={()=>changeHandler("prev",change)}>prev</button>

            </div>

            <h1> {slides[count]['title']} </h1>
            <h1> {slides[count]['text']} </h1>
        </div>
    );
}

export default Slides;