import React, { useRef } from 'react';

const Child = ( {name , send , update} ) => {

    const messageRef = useRef('');
    const nameRef = useRef('');


    const pressButton = () => {
        const text = messageRef.current.value;
        alert(`Text in input ${text}`);
    }

    const pressButtonParam = (message) => {
        alert(`Text: ${message}`);
    }

    const submitName = (e) => {
        e.preventDefault();
        update(nameRef.current.value);
    }

    return (
        <div style={{backgroundColor: 'green' , padding: '10px'}}>
           <p onMouseOver={ () => console.log('On mouse over')}>
           ** Hello {name} **
        </p> 
           <button onClick={ () => console.log('Button 1 pulsed')}>* Button 1 *</button>
           <button onClick={ pressButton }>* Button 2 *</button>
           <button onClick={ () => pressButtonParam('Hello') }>* Button 3 *</button>
           <input 
           placeholder='Send text to your Father' 
           onFocus={() => console.log('Input Focus')}
           onChange={(e) => console.log('Input Changed' , e.target.value)}
           onCopy={() => console.log('Copied text from input')}
           ref={messageRef}
           >
           </input>
           <button onClick={ () => send(messageRef.current.value)}> Send Message </button>
           <div style={{marginTop: '20px'}}>
                <form onSubmit={submitName}>
                    <input ref={nameRef} placeholder='New Name'/> hr
                    <button type='submit'> - Update Name - </button>
                </form>
           </div>
        </div> 
    );
}

export default Child;
