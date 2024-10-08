import { useSelector } from "react-redux"

function AirlineList() {
    let airlineList = useSelector(store => store.airlineList)
   
   return (<>
   
        {airlineList.map((airline) => {
          return <table key={airline}>{airline}</table>
        })}
       
        
    </>)
}

export default AirlineList
