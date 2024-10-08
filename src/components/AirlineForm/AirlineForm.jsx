import { useDispatch } from "react-redux"
import { useState } from 'react'

function AirlineForm() {
    const dispatch = useDispatch()
    let [newAirline, setNewAirline] = useState('')

    const handleInput = (event) => {
        console.log("Change is happening")
        setNewAirline(event.target.value)
        console.log("current element to add:", newAirline)
      }

    return (<>
        <div>
            <input
                type="text"
                value={newAirline}
                onChange={(event) => { handleInput(event) }}
                placeholder="Airline Name" />

            <button
                type="submit"
                onClick={() => dispatch({ type: 'ADDAIRLINE', payload: newAirline })}>
                Submit
            </button>
            
      
        </div>
    </>)
}

export default AirlineForm