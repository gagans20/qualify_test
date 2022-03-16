import React, {useState} from 'react';

export default function Name(props) {
    const[name, setName]= useState(props.value)
    
    function handleChange(e){
        setName(e.target.value);
        props.edit==="Save"?props.edit="Edit":props.edit="Edit";
    }
    
    return(
        <form>
        <div id='name'>
            <div id="username">{props.id}</div>
            <div id="realName">
            <input
                type="text"
                id="new-todo-input"
                className="input input__lg"
                name="text"
                autoComplete="off"
                value={props.value}
                onChange={handleChange}
            />
            </div>
            <div id="saveName">
                <button type="submit" className="btn btn__primary btn__lg">
                    {props.edit}
                </button> 
            </div>
        </div>
        </form>
    );
}