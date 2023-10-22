import axios from 'axios';

/**
 * Login method to ReqRes endpoint
 * @param {*} email 
 * @param {*} password 
 */
export const login = (email, password) => {

    let body = {
        email,
        password
    }
    //Return the response with promise
    return axios.post('https://reqres.in/api/login' , body)
}



// Obtain all users

export const getAllUsers = () => {
    return axios.get('https://reqres.in/api/users');
}
 
export const getPagedUsers = (page) => {
    return axios.get(`https://reqres.in/api/users?page=${page}`);
}

//Obtain User by id
export const getUserById = (id) => {
    return axios.get(`https://reqres.in/api/users/${id}`);
}


//Create user

export const createUser = (name , job) => {
    let body = {
        name,
        job
    }
    return axios.post(`https://reqres.in/api/users` , body);
}

//Update User

export const updateUser = (id , name , job) => {
    let body = {
        name,
        job
    }
    return axios.put(`https://reqres.in/api/users/${id}` , body);
}

//Delete user

export const deleteUserById = (id) => {
    return axios.get(`https://reqres.in/api/users/${id}`);
}