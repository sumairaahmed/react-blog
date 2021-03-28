import Blogitem from "./Blogitem"

function Bloglist(props){
    return <div>
        {props.blogs.map(blog=> 
        <Blogitem 
            key={blog.id}
            id={blog.id} 
            title={blog.title}
            image={blog.image}
            description={blog.description}
            />) }
    </div>


}

export default Bloglist