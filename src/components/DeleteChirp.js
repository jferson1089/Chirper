import React, { useState } from 'react'
import { FaTrash } from 'react-icons/fa'
import { deleteChirp } from '../service/api-helper'

function DeleteChirp() {
    const [chirp, setChirp] = useState('')

    const handleDeleteChirp = async (id) => {
        const json = await deleteChirp(id)
        console.log('deleted this chirp', json)
        if (json.status === 'success') {
            const chirpsArr = chirp.filter(chirp => chirp._id !== id)
            setChirp(chirpsArr)
        }
    }

    return (
        <>
            <FaTrash
                onClick={handleDeleteChirp}
            />
        </>
    )
}

export default DeleteChirp