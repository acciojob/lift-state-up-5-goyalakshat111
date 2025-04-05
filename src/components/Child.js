import React from "react";

const Child = ({setIsLoggedIn})=>{

    function handleSubmit(e){
        e.preventDefault();
        setIsLoggedIn(true);
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
            <input type="text" name="name"/>
            <input type="password" name="password"/>
            <button>LogIn</button>
            </form>
        </div>
    )
}

export default Child;