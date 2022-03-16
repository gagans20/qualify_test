import React, {useState} from 'react';

export default function Name(props) {
    const[name, setName]= useState(" ")
    
    function handleChange(e){
        setName(e.target.value);
    }
    
    function handleSubmit(e){
        e.preventDefault();
        props.changeName(name);
        setName("");
      }

    return(
        <form onSubmit={handleSubmit}>
        <div id='name'>
            <div id="username">Username</div>
            <div id="alias">beautifulduck605</div>
            <div id="realName">
            <input
                type="text"
                id="new-todo-input"
                className="input input__lg"
                name="text"
                autoComplete="off"
                value={name}
                onChange={handleChange}
            />
            </div>
            <div id="saveName">
                <button type="submit" className="btn btn__primary btn__lg">
                    Save
                </button> 
            </div>
        </div>
        </form>
    );
}