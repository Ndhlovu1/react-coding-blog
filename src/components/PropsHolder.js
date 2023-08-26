function PropsHolder(props) {
    const holder = {
        padding:"20px",
        border: "1px solid gray",
        background:"#ffff03",
        margin : "20px 0"
    }

    return(
        <div style={holder}>
            {props.children}
        </div>
    )
    
}

export default PropsHolder;