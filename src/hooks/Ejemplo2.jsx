/**
 * Ejemplo de uso de hooks:
 * USESTATE USEREF USEEFECT
 */

import React, { useState ,  useRef , useEffect } from 'react';

const Ejemplo2 = () => {

    const [counter, setCounter] = useState(0);
    const [counter2, setCounter2] = useState(0);

    //Usando referencias para asociar una variable con un elemento del DOM

    const miRef = useRef();

    function increaseCounter1(params) {
        setCounter(counter + 1);
    }

    function increaseCounter2(params) {
        setCounter2(counter2 + 1);
    }

    // Si counter Cambia UseEffect Actua

    // useEffect(() => {
    //     console.log('Cambio en el estado del componente');
    //     console.log('Mostrando referencia al elemento del DOM');
    //     console.log(miRef);
    // });

    // Solamente cuando cambie contador uno!!

    

    useEffect(() => {
        console.log('Cambio en el contador 1 o 2');
        console.log('Mostrando referencia al elemento del DOM');
        console.log(miRef);
    }, [counter , counter2]);

    return (
        <div>
            <div>
                <h1>** Ejemplo 2 UseState , UseRef y useEffect ** </h1>
                <h3> Contador: {counter} </h3>
                <h3> Contador: {counter2} </h3>
                {/* Elemento referenciado */}
                <h4 ref={miRef}> Example of referenced element</h4>
                <div>
                    <button onClick={increaseCounter1}> Increase counter 1</button>
                    <button onClick={increaseCounter2}> Increase counter 2</button>
                </div>
                
            </div>  
        </div>
    );
}

export default Ejemplo2;
