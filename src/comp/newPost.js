
import React, { useRef } from 'react'


import { useNavigate } from 'react-router';

export default function NewPost() {
    var nav = useNavigate();
    var id = 1;
    var currentUser = useRef("");
    function navigate() {
        nav("/IntroducingUser/" + currentUser.current.value)

    }
    return (
        <>

            <label > userId</label>
            <input type="text" ref={currentUser}></input>
            <label>body</label>
            <input type="text" ></input>
            <label> title</label>
            <input type="text"></input>
            <br></br>
            <br></br>

            <input type="button" value="Data retention👈🏽" onClick={() => {
                debugger

                navigate()
            }} />

        </>
    )
}