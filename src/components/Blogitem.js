function Blogitem(props){
    return (
        <div className="card mb-3 text-center">
            <img className="card-img-top" src={props.image} alt={props.title}/>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                <button className="btn btn-primary" type="submit">Add to favourites</button>
            </div>
        </div>
    )
}

export default Blogitem