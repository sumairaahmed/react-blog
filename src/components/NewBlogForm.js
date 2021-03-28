import {useRef} from 'react';


const NewBlogForm = (props) =>{
    

    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const descriptionInputRef = useRef();

    

    

    function SubmitHandler(event){
        event.preventDefault();
        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;

        const BlogData = {
            title:enteredTitle,
            image:enteredImage,
            description:enteredDescription
        }
        props.onBlogData(BlogData)
    }




    return(
    
        <form onSubmit={SubmitHandler}>
            <div className="form-group">
                <label htmlFor="title">Title</label>
                <input 
                type="text" 
                className="form-control" 
                id="title" 
                aria-describedby="emailHelp" 
                placeholder="Title"
                ref={titleInputRef}
                />
                
            </div>
         <div className="form-group">
                <label htmlFor="image">imageUrl</label>
                <input 
                type="url" 
                className="form-control" 
                id="image" 
                placeholder="Image Url"
                ref={imageInputRef}
                />
        </div>
        <div className="form-group">
            <label for="description">Description</label>
            <textarea 
            className="form-control" 
            id="description" 
            rows="3"
            ref={descriptionInputRef}></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}

export default NewBlogForm