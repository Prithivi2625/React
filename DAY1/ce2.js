import React from "react" ;
const alertMsg=()=>
{
    alert("Welcome");
    console.log("React Application");
}
const App=()=>
{
    return(
        <div>
            <h1>let us see the output of Javascript</h1>
            <button onClick={alertMsg} >Click me </button>
        </div>
    );
}
export default App;
