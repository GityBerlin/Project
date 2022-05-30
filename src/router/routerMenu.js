import React from "react";

import { Routes, Route, BrowserRouter as Router, Link } from "react-router-dom";
import NewPost from "../comp/newPost";
import UserPost from "../comp/userPost";
import DisplayUser from "../comp/users";
import Hi from "../comp/introducingUser";

export default function Menu() {
    return (
        <Router >
            <Link to="/">users |</Link>
            <Link to="/userPost"> post of user|</Link>
            <Link to="/newPost">new post of user|</Link>
            

            <Routes>
                <Route path="/" element={<DisplayUser />}></Route>
                <Route path="/userPost" element={< UserPost />}></Route>
                <Route path="/newPost" element={<NewPost />}></Route>
                <Route path="/IntroducingUser/:id" element={<Hi/>}></Route>

            </Routes>
        </Router>



    )
}