function Btn() {

    const clickHanderfunction =
    () => console.log('clicked')

    return(
        <button onClick={clickHanderfunction}>
            Place Order
            </button>
    )

}

// export default Btn;

// Ctrl + K + C

function Btn2() {

    const clickHanderfunction = 
    () => console.log('Mouse Over')

    return(
        <button onMouseOver={clickHanderfunction}>
            Hover Over Me
            </button>
    )
    
}

export {Btn2, Btn};