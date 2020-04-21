import React, { useState } from 'react'
import { FaTrash } from 'react-icons/fa'
import { deleteChirp } from '../service/api-helper'

function DeleteChirp(props) {
    console.log("delete chirps - props - ", props)
    console.log('deleted this chirp', props.chirps[0]._id)
    const [chirp, setChirp] = useState()

    const handleDeleteChirp = async (id) => {
        console.log('this is getting clicked')
        const json = await deleteChirp(id)

        console.log('when clicked we get ', json)

        if (json.status === 'success') {
            const chirpsArr = props.chirps.filter(chirp => chirp._id !== id)
            setChirp(chirpsArr)
        }
    }

    return (
        <>
            <FaTrash
                onClick={() => handleDeleteChirp(props._id)}
            />
        </>
    )
}

export default DeleteChirp