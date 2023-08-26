function Header(props){
    //console.log(props)
    return(
        <div>
            <h3>Welcome {props.firstname} {props.lastname}!</h3>
            
        </div>
    );
}

export default Header;