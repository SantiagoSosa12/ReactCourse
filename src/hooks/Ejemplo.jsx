/**
 * Ejemplo de uso de hook
 * 
 * Crear un componente de tipo funcion y acceder a su estado privado
 * a traves de un hook y ademas poder modificarlo
 */

import React, { useState } from 'react';

const Ejemplo = () => {
    //Valor inicial para un contador

    const valorInicial = 0;

    // valor inicial para una persona

    const personaInicial = {
        nombre : 'Jose',
        email : 'josesito@gmail.com'
    }
    /**
     * El html cambia segun se cambia el objeto
     */

    const [contador, setContador] = useState(valorInicial);
    const [persona, setPersona] = useState(personaInicial);

    function increateCounter() {
        setContador(contador + 1);
    }

    function updatePerson() {
        setPersona({
            nombre : 'Pedro',
            email: 'pepe@gmail.com'
        })
    }

    return (
        <div>
            <h1>** Ejemplo de uso de useState() ** </h1>
            <h3> Contador: {contador} </h3>
            <h2>Datos de la persona</h2>
            <h3> Nombre {persona.nombre} </h3>
            <h3> Correo {persona.email} </h3>
            <button onClick={increateCounter}> Increase Counter </button>
            <button onClick={updatePerson}> Update to Pedro </button>
        </div>
    );
}

export default Ejemplo;
