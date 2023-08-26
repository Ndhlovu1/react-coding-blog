function Intro1(props){
    return(
        <div className="blog-post-intro">
            <h2>I have become a react developer</h2>
            <div>
                <p>I am now officially a Junior React Developer</p>
                <p className="link">Read More ...</p>
                <i> Author: {props.author} </i>
            </div>
        </div>
    )
}

export default Intro1;