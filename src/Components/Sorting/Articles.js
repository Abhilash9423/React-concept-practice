import React,{useState} from 'react';

function Articles(props) {
    const articles = [ {title: 'Scaling to 100k Users', upvotes: 72, date: '2019-01-21'}, 
        {title: 'the Emu War', upvotes: 24, date: '2019-10-21'} ,
        {title: 'Alphabet earnings', upvotes: 22, date: '2019-11-23'} ,
        {title: 'A message to our customers', upvotes: 12, date: '2020-01-24'} , 
        {title: 'Simple text editor has 15k monthly users', upvotes: 7, date: '2010-12-31'} ,
        {title: 'Artificial Mountains', upvotes: 2, date: '2019-11-22'}, 
        {title: "What's SAP", upvotes: 1, date: '2019-11-21'}] 
    const [articlesNew,setarticlesNew] = useState(articles)

    const sortedByUpvottes = () => {
        
        setarticlesNew(articlesNew.slice().sort((a,b)=>b.upvotes-a.upvotes))
    }

    const mostRecent = () =>{
   
        setarticlesNew( articles.slice().sort((a,b)=>new Date(b.date) - new Date(a.date)))
    }


    return (
        <div>

        <button onClick={sortedByUpvottes}>Most Upvoted</button>
        <button onClick={mostRecent}>Most Recent</button>
                    
                <div>
                        <span style={{margin:"10%"}}>Title</span>
                        <span style={{margin:"10%"}}>Upvotes</span>
                        <span style={{margin:"10%"}}>Date</span>
                </div>        
                    {
                        articlesNew.map((post,index)=>(
                            <div key={index}>
                            <span style={{margin:"10%"}} >{post.title}</span>
                            <span style={{margin:"10%"}}>{post.upvotes}</span>
                            <span style={{margin:"10%"}}>{post.date}</span>       
                            </div>)
                        )
                    }                   
        </div>
    );
}

export default Articles;