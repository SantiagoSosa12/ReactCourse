import React, { useState } from 'react';
import { getNumbers } from '../../services/observableService';

const ObservableExample = () => {

    const [naumber, setNaumber] = useState(0);

    const obtainNewNumbers = () => {
        console.log('Subscription to Observable');
        getNumbers.subscribe(
            {
                next(newNumber) {
                    console.log('New Number: ', newNumber);
                    setNaumber(newNumber);
                },
                error(error) {
                    alert(`Something went wrong: ${error}`)
                },
                complete() {
                    alert(`Finished with ${naumber}`);
                    console.log('Done with the observable');
                }
            }
        )
    }

    return (    
        <div>
            <h2>Number : {naumber}</h2>
            <button onClick={obtainNewNumbers}>Obtain Numbers</button>
        </div>
    );
}

export default ObservableExample;
