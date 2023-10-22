import React from 'react';
import getRandomUser from '../services/axiosService';
import { useState } from 'react';

const AxiosExample = () => {

    const [user, setUser] = useState(null);

    const generateUser = () => {
        getRandomUser()
            .then((response) => {
                if (response.status === 200) {
                    setUser(response.data.results[0]);
                }
                console.log(response.data.results[0]);
            })
            .catch((error) => {
                alert(`Something went wrong: ${error}`)
            })
    }

    // useEffect(() => {
    //     generateUser();
    // }, []);

    return (
        <div>
            <h1>Axios Example</h1>
            {user !== null ?
                (
                    <div>
                        <img alt='avatar' src={user.picture.large}></img>
                        <h2>
                            {user.name.title}
                            {user.name.first}
                            {user.name.last}
                        </h2>
                        <h3>{user.email}</h3>
                    </div>
                )
                :
                (
                    <div>
                        <p>Generate a new User</p>
                        <button onClick={generateUser}>
                            Generate new random user
                        </button>
                    </div>
                )
            }
        </div>
    );
}

export default AxiosExample;
