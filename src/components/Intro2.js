function Intro2(props){
    return(
        <div className="blog-post-intro">
            <h2>Why I love development</h2>
            <div>
                <p>From the beginning of days many great people wondererd whom they were...</p>
                <p className="link">Read More ...</p>
                <i> Author: {props.author} </i>
           
            </div>
        </div>
    )
}

export default Intro2;