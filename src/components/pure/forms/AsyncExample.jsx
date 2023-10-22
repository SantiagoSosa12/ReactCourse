import React from 'react';

const AsyncExample = () => {

    async function generateNumber() {
        return 1;
    }

    async function generatePromiseNumber() {
        return Promise.resolve(2)
    }

    const obtainNumber = () => {
        generateNumber().then(
            (response) => alert(`Response: ${response}`)
            .catth((error) => alert(`Something went wrong ${error}`))
        );
    }

    const obtainNumber2 = () => {
        generatePromiseNumber().then(
            (response) => alert(`Response: ${response}`)
            .catth((error) => alert(`Something went wrong ${error}`))
        );
    }

    const showStorage = () => {
        saveSesionStorage('name' , 'Santiago')
            .then((response) => {
                let value = response;
                alert(`Save Name: ${value}`);
            })
            .catch((error) => {
                alert(`Something went wrong ${error}`);
            })
            .finally(() => 
                alert('SUCCESS: Name saved and retrived')
            )
    }

    async function obtainMessage() {
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => resolve('Hello World') , 2000)
        });

        let message = await promise;

        await alert(`Message recived: ${message}`);
    }

    async function saveSesionStorage(key, value) {
        sessionStorage.setItem(key , value);
        return Promise.resolve(sessionStorage.getItem(key));
    }

    const returnError = async() => {
        await Promise.reject(new Error('Opps'));
    }

    const consumeError = () => {
        returnError()
        .then((response => {
            alert(`Everithying is Ok: ${response}` )
        }))
        .catch((response => {
            alert(`Something went wrong: ${response}` )
        }))
        .finally((response => {
            alert(`Finally execution: ${response}` )
        }))
    }

    const urlNotFound = async () => {
        try {
            let response = await fetch('https://invalidUrl.com');;
            alert(`Response ${JSON.stringify(response)}`)
        } catch (error) {
            alert(`Something went wrong with your Url: ${error} (Check your console)` )
        }
    }

    const multiplePromise = async () => {
        let results = await Promise.all(
            [
                fetch('https://regres.in/api/users'),
                fetch('https://regres.in/api/users?page=2'),
            ]
        ).catch((error) =>{
            alert(`Something went wrong with your Urls: ${error} (Check your console)` )
        })
    }


    
    return (
        <div>
            <h1> Async, Promise</h1>
            <button onClick={obtainNumber}>
                Obtain number
            </button>
            <button onClick={obtainNumber2}>
                Obtain Promise number
            </button>
            <button onClick={showStorage}> Save Name and Resolve </button>
            <button onClick={obtainMessage}> Recive message in 2 seconds </button>
            <button onClick={consumeError}> Consume Error </button>
            <button onClick={urlNotFound}> urlNotFound </button>
            <button onClick={multiplePromise}> Multiple Promises </button>
        </div>
    );
}

export default AsyncExample;
