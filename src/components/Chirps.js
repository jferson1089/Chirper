import React, { useState, useEffect, useReducer } from 'react'
import { getAllChirps } from '../service/api-helper'



function Chirps() {

    const [chirps, setChirps] = useState([])

    useEffect(() => {
        const makeAPICall = async () => {
            const resp = await getAllChirps()
            setChirps(resp)
            console.log('getallchirps', resp)

        }
        makeAPICall()
    }, [])

    const renderChirps = chirps.map((chirp, index) => {
        return (
            <li key={index}>{chirp.username}
                <p>{chirp.body}</p>
                <p>{chirp.date}</p>
                <p>{chirp.numLikes}</p>
                <hr />
            </li>
        )
    })


    return (
        <>
            <ul>
                {renderChirps}

            </ul>
        </>
    )
}

export default Chirps