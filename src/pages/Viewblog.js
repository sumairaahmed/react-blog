import Bloglist from "../components/Bloglist"
import {useState, useEffect} from 'react';




function Viewblog(){
    const [isLoading, setIsLoading] = useState(true)
    const[loadedData, setLoadedData] = useState([])

    useEffect(()=>{
        fetch('https://react-study-32531-default-rtdb.firebaseio.com/blogs.json'
        ).then(response =>{
            return response.json();
        }).then(data=>{

            
            const newblogs = []
            for(const key in data){
                const newblog = {
                    id:key,
                    ...data[key]
                }
                newblogs.push(newblog)
                
            
            }
            setIsLoading(false)
            setLoadedData(newblogs)


            
    })

    },[])


    
    if (isLoading){
        return <section>
            <p>Loading..</p>
        </section>
    }
    return (
       <div>
           <Bloglist blogs={loadedData} />
       </div>
    );
    
}
export default Viewblog