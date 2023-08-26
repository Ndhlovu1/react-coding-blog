function Intro3(props){
    return(
        <div className="blog-post-intro">
            <h2>Best way to style your react app</h2>
            <div>
                <p>Numerous wonderful ways of styling your React App</p>
                <p className="link">Read More ...</p>
                <i> Author: {props.author} </i>
            </div>
        </div>
    )
}

export default Intro3;