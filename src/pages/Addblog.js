import {useHistory} from 'react-router-dom'
import NewBlogForm from "../components/NewBlogForm"

function Addblog(){
    const history = useHistory();
    function addBlogHandler(BlogData){
        fetch('https://react-study-32531-default-rtdb.firebaseio.com/blogs.json',{
            method:'POST',
            body:JSON.stringify(BlogData),
            headers:{
                'Content-Type':'application/json'
            }
        }
        ).then(() =>{
            history.replace('/')
        })
    }
    return(
        <NewBlogForm onBlogData={addBlogHandler}/>
    )

}

export default Addblog