function ModeToggler() {

    let darkModeOn = false
    const darkMode = <h3>Dark Mode is On</h3>
    const lightMode = <h3>Light Mode is On</h3>

    function changeMode(){
        darkModeOn = !darkModeOn
        
        switch (darkModeOn) {
            case true:
                
                console.log("Dark Mode is On")
                break;

            case false:
                
                console.log("Light Mode is On")
                break;

            default:
                console.log("Enter [ true or false ] only")
                break;
        }

    }

    return (
        <>
            {darkModeOn ? darkMode : lightMode}
            <button onClick={changeMode}>
                Change Mode
            </button>


        </>
    )
}

export default ModeToggler

