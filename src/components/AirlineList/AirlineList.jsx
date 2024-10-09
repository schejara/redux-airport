import { useSelector } from "react-redux";

function AirlineList() {
    const airlineList = useSelector(store => store.airlineList);
   
    return (
        <>
            <h2>Airline List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Airline Name</th>
                        <th>Plane Count</th>
                    </tr>
                </thead>
                <tbody>
                    {airlineList.map((airline, index) => (
                        <tr key={index}>
                            <td>{airline.name}</td>
                            <td>{airline.count}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default AirlineList;
