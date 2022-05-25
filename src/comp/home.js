

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


export default function BasicTable() {
    let [rows, setRows] = useState([])
    const setFilter = useRef("");
    var userFromServer;

    useEffect(() => {
        allUser()
    }, [])

    async function allUser() {
        var userFromServer = await getUser1()
        if (userFromServer)
            setRows(rows.concat(userFromServer))
    }
    function nameSearch() {
       
        console.log(setFilter.current.value);
        setRows(rows.filter(x => x.name.includes(setFilter.current.value)))
    }
    function emailSearch() {
        
        setRows(rows.filter(x =>{x.email.includes(setFilter.current.value) }))
    }
    return (
        <>
             <p>name:</p>
            <input type="text" placeholder="Search 🔍" ref={setFilter} onKeyUp={nameSearch}></input>
            <p>email:</p>
            <input type="text" placeholder="Search 🔍" ref={setFilter} onKeyUp={emailSearch}></input>
       


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

