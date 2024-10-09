import { useDispatch } from "react-redux"
import { useState, } from 'react'


function AirlineForm() {
    
    const dispatch = useDispatch()
    let [newAirline, setNewAirline] = useState('')
    let [planeCount,setPlaneCount] =useState('')
   
    const handleAirlineInput = (event) => {
        //console.log("Change is happening")
        setNewAirline(event.target.value)
        //console.log("current element to add:", newAirline)
      }

      const handleAirlineCount = (event) => {
        //console.log("Change is happening")
        setPlaneCount(event.target.value)
        //console.log("current element to add:", planeCount)
      }

    return (<>
        <div>
            <input
                type="text"
                value={newAirline}
                onChange={(event) => { handleAirlineInput(event) }}
                placeholder="Airline Name" />   
            
             <input 
                type = "number"
                value = {planeCount}
                onChange={(event) => { handleAirlineCount(event) }}
                placeholder="plane count"/>
               
            <button
                type="submit"
                onClick={() => dispatch({ type: 'ADDAIRLINE',  payload: {name:newAirline, count:planeCount}  })

            } 
           
                >
                Submit
            </button>
            
        </div>
    </>)
}

export default AirlineForm