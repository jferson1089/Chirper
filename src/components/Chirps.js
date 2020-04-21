import React, { useState, useEffect, useReducer } from 'react'
import { getAllChirps } from '../service/api-helper'
import ChirpComments from './ChirpComments'
import '../App.css'

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
            <li key={index}>
                <p id="name">{chirp.username}</p>
                <p>{chirp.body}</p>
                <p>Date:{chirp.date}</p>
                <p><i class="fas fa-hand-spock"></i> {chirp.numLikes}</p>
                <hr />
                <ChirpComments chirpsComments={chirps}/>
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