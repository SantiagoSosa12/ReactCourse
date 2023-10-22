
export const getAllUsers = async () => {
    let result = null;
    try {
        await fetch('https://reqres.in/api/users')
            .then(response => response.json())
            .then(data => result = data);
    } catch (error) {
        console.error('Ocurred has error', error)
    }

    console.log('Resultado es: ', result);
    return result;
}

export const getAllPagedUsers = async (page) => {
    let result = null;
    try {
        await fetch(`https://reqres.in/api/users?page=${page}`)
            .then(response => response.json())
            .then(data => result = data);
    } catch (error) {
        console.error('Ocurred has error', error)
    }
    console.log('Resultado es: ', result);
    return result;
}

export const getUsersDetails = async (id) => {
    let result = null;
    try {
        await fetch(`https://reqres.in/api/users/${id}`)
            .then(response => response.json())
            .then(data => result = data);
    } catch (error) {
        console.error('Ocurred has error', error)
    }
    console.log('Resultado es: ', result);
    return result;
}

export const login = async (email, password) => {
    let body = {
        email,
        password
    }
    let response = await fetch('https://reqres.in/api/login', {
        method: 'POST',
        mode: 'no-cors',
        credentials: 'omit',
        cache: 'no-cache',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(body),
    });
    console.log('Response' , response);
    console.log('Status' , response.status);
    console.log('Ok?' , response.ok);
    return response.json();

}