

import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect, useState, useRef } from 'react'
import { getUser1 } from './servUser'
import { useDispatch,useSelector } from 'react-redux';
import  {allUser} from '../redux/action';

export default function BasicTable() {
    let [rows, setRows] = useState([])
    var setName = useRef("");
    const setEmail = useRef("");
    const allUserRedux = useSelector(store => store.reducerUser.users)

    let dis = useDispatch();
    
// var userFromServer=[]
    useEffect(() => {
        debugger
        // console.log(allUserRedux);
        getUser()
    }, [])

    async function  getUser(){
        var userFromServer = await getUser1()
        if (userFromServer){ 
            setRows(rows.concat(userFromServer))
            debugger
            
            dis(allUser(userFromServer));
            console.log(allUserRedux);
        }
    }
    function nameSearch() {
       
       
        setRows(allUserRedux.filter(x => x.name.includes(setName.current.value)))
    }
    function emailSearch() {
        
        setRows(allUserRedux.filter(x =>{x.email.includes(setEmail.current.value) }))
    }
    return (
        <>
             <p>name:</p>
            <input type="text" placeholder="Search 🔍" ref={setName} onKeyUp={nameSearch}></input>
            <p>email:</p>
            <input type="text" placeholder="Search 🔍" ref={setEmail} onKeyUp={emailSearch}></input>
       


            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>

                            <TableCell align="left"></TableCell>
                            <TableCell align="left">name:&nbsp;</TableCell>
                            <TableCell align="left">email:&nbsp;</TableCell>
                            <TableCell align="left">company:&nbsp;</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                </TableCell>
                                <TableCell align="left">{row.name}</TableCell>
                                <TableCell align="left">{row.email}</TableCell>
                                <TableCell align="left">{row.company.name}</TableCell>


                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </>
    );
}

