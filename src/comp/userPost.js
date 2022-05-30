

import React, { useEffect, useState, useRef } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { getListPost } from '../services/servUser'
import { useDispatch, useSelector } from 'react-redux';
import { listUserPost } from '../redux/action';
import { useNavigate } from 'react-router';
export default function UserPost() {
    let [newUser, setNewUser] = useState([])
    const setId = useRef("");
    let allUserRedux = useSelector((store) => store.reducerUser.listforpost);
    let navigate = useNavigate();
    let dis = useDispatch();

    useEffect(() => {
        getUser()
    }, [])

    async function getUser() {
        var userFromServer = await getListPost()
        if (userFromServer) {
            setNewUser(newUser.concat(userFromServer))
            dis(listUserPost(userFromServer));
        }
    }
    function idSearch() {
         setNewUser(allUserRedux.filter(x => x.userId==(setId.current.value)))

    }
    function newPost1() {
        navigate("/newPost")
    }

    return (
        <>
            <br></br>
            <input type="button" value="newPost" onClick={newPost1}></input>
            <br></br>
            <p>idUser:</p>
            <input type="text" placeholder="Search 🔍" ref={setId} onKeyUp={idSearch}></input>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>

                            <TableCell align="left"></TableCell>
                            <TableCell align="left">UserId:&nbsp;</TableCell>
                            <TableCell align="left">id:&nbsp;</TableCell>
                            <TableCell align="left">titel:&nbsp;</TableCell>
                            <TableCell align="left">body:&nbsp;</TableCell>


                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {newUser.map((u) => (
                            <TableRow
                                key={u.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                </TableCell>
                                <TableCell align="left">{u.userId}</TableCell>

                                <TableCell align="left">{u.id}</TableCell>
                                <TableCell align="left">{u.title}</TableCell>

                                <TableCell align="left">{u.body}</TableCell>


                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </>
    );
}

