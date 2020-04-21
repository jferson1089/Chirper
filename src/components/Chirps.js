import React, { useState, useEffect, useReducer } from 'react'
import { getAllChirps } from '../service/api-helper'
import ChirpComments from './ChirpComments'
import { Toast, ToastBody, ToastHeader, Spinner, Col } from 'reactstrap';
import DeleteChirp from './DeleteChirp'




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
            <>
                <div className="chirpdiv">

                    <ToastHeader icon="info" key={index}>
                        {chirp.username}
                    </ToastHeader>
                    <ToastBody>
                        {chirp.body}
                        <br />
                        {chirp.date}<br />
                        <DeleteChirp />
                    </ToastBody>

                </div>
            </>
            // <li key={index}>{chirp.username}
            //     <p>{chirp.body}</p>
            //     <p>{chirp.date}</p>
            //     <p>{chirp.numLikes}</p>
            //     <hr />
            //     {/* <ChirpComments chirpsComments={chirps} /> */}
            //     <hr />
            // </li>
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