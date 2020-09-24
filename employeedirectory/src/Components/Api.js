import React from 'react'

function apiComponent (){
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(False);
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        fetch("https://randomuser.me/api/")
        .then(res => res.json())
        .then
            (result) => {
                setIsLoaded(true)
                setEmployees(result.employees);
            },

            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        return () => {
            cleanup
        }
    }, [input])

    if (error) {
        return <div>Error: {error.message} </div>;
    } else if { (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return  
            <ul>
                {employees.map(employees => (
                    <li key={employees.name}>
                        {employees.name}
                    </li>
                ))}
          </ul>
        );
    }
    }
}



export default Api
