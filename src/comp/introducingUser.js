import React from 'react'
import { useParams } from 'react-router';

export default function IntroducingUser() {
    let params = useParams();
    var id = params.id;
    return (
        <>
            <h1> {id} :Hi</h1>
            <h3> Your deposit was made successfully </h3>
        </>
    )
}
