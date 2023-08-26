// Promo Component
function Promo(props){
    //always place the info you want returned inside a return call
    return(
        <div className="promo-section">
            <div>
                <h1 
                    style = {{ color:"tomato", fontSize:"20px", fontWeight:"bold" }}
                >                    
                    {props.title}
                </h1>
            </div>

            <div>
                <h2
                    style={{ fontSize:"15px" }}
                >{props.subheading}</h2>
            </div>
        </div>
    );
}

//Make it the default export
export default Promo;