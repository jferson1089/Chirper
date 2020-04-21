import React,{useEffect, useState} from 'react'

function ChirpComments({id}) {
    const [comment,setComment]= useState('')

    useEffect(() => {
        const makeAPICall = async () => {
            const resp = await getCommentById(id)
            setComment(resp)
            console.log('getcommentbyid', resp)
        }
        makeAPICall()
    }, [])



    console.log('chirpcommnets - ', props)
   
    return (
        <div className="chirpStyle">
            <h6>    --user name</h6>
            <p>  {id} </p>
            <p>    --date</p>
        </div>
    )
    
}

export default ChirpComments