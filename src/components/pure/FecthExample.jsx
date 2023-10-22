import React, { useState, useEffect } from 'react';
import { getAllPagedUsers, getAllUsers, getUsersDetails, login } from '../../services/fecthService';

const FecthExample = () => {

    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [totalUsers, setTotalUsers] = useState(0);
    const [userPerPage, setuserPerPage] = useState(2);
    const [pages, setPages] = useState(0);

    useEffect(() => {
        obtainUsers();
    }, []);

    const obtainUsers = () => {
        getAllUsers()
            .then((response) => {
                if (response !== null) {
                    setUsers(response.data);
                    setTotalUsers(response.total);
                    setuserPerPage(response.per_page);
                    setPages(response.total_pages);
                }
            })
            .catch((error) => {
                alert(`Error while retriveng the users ${error}`)
            })
            .finally(() => {
                console.log('Ended obtaining uses');
                console.table(users);
            })
    }

    const obtainPagedUsers = (page) => {
        getAllPagedUsers(page)
            .then((response) => {
                if (response !== null) {
                    setUsers(response.data);
                    setTotalUsers(response.total);
                    setuserPerPage(response.per_page);
                    setPages(response.total_pages);
                }
            })
            .catch((error) => {
                alert(`Error while retriveng the users ${error}`)
            })
            .finally(() => {
                console.log('Ended obtaining uses');
                console.table(users);
            })
    }

    const obtainUserDetails = (id) => {
        getUsersDetails(id)
            .then((response) => {
                if (response !== null) {
                    setSelectedUser(response.data);
                }
            })
            .catch((error) => {
                alert(`Error while retriveng the user ${error}`)
            })
            .finally(() => {
                console.log('Ended obtaining uses');
                console.table(selectedUser);
            })
    }

    const authUser = () => {
        login('eve.holt@reqres.in' , 'eve.holt@reqres.in')
        .then((response) => {
            if (response !== null) {
                console.log('Token' , response.token);
                sessionStorage.setItem('token' , response.token)
            }
        })
        .catch((error) => {
            alert(`Error while Login the user ${error}`)
        })
        .finally(() => {
            console.log('Ended Login users, Navigate to home');
        })
    }

    return (
        <div>
        {/* Buttong to smulate Login */}
            <button onClick={authUser}>Auth user</button>
            <h2>
                Users:
            </h2>
            {users.map((user, index) => (
                <p key={index} onClick={() => obtainUserDetails(user.id)}>
                    {user.first_name} {user.last_name}
                </p>
            ))}
            <p>Showing {userPerPage} user of {totalUsers}</p>
            <button onClick={ () => obtainPagedUsers(1)}>
                1
            </button>
            <button onClick={() => obtainPagedUsers(2)}>
                2
            </button>
            <div>
                <h3>
                    User Details
                </h3>
                { selectedUser && (<p>(
                    Name: {selectedUser.first_name}
                    Last Name: {selectedUser.last_name}
                    Email: {selectedUser.email}
                    <img alt='Avatar' src={selectedUser.avatar} style={{height:'50px', width:'50px'}}></img>
                )</p>)}
            </div>
        </div>
    );
}

export default FecthExample;
