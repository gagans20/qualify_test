import React, {useState} from 'react';

export default function Name({id, value, edit}) {
    
    const[x, setX]= useState({value});
    function handleChange(e){
        setX(e.target.value);
        edit==="Save"?edit="Edit":edit="Edit";
    }
    
    return(
        <form>
        <div id='name'>
            <div id="username">{id}</div>
            <div id="realName">
            <input
                type="text"
                id="new-todo-input"
                className="input input__lg"
                name="text"
                autoComplete="off"
                value= {value}
                onChange={handleChange}
            />
            </div>
            <div id="saveName">
                <button type="submit" className="btn btn__primary btn__lg">
                    {edit}
                </button> 
            </div>
        </div>
        </form>
    );
}