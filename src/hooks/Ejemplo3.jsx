/**
 * Ejemplo de Hooks: 
 *  - useState()
 *  - useContext()
 */

import React , {useState , useContext} from 'react';

const ownContext = React.createContext(null);

/**
 * Contains context recived from father
 * @returns Component 1
 */
const Component1 = () => {

    //Fill with data father
    //This use variable created in line 9
    const state = useContext(ownContext);

    return (
        <div>
            <h2>The token (from mi  father) is: {state.token}</h2>
            {/* Print component 2 */}
            <Component2></Component2>
        </div>
    );
}

const Component2 = () => {

    //This use variable created in line 9
    const state = useContext(ownContext);

    return (
        <div>
            <h2> The sesion is: {state.sesion}</h2>
        </div>
    );
}

export default function OwnComponetWithContext() {

  const initialState = {
    token : '1234567',
    sesion : 1,
  }  

  //Create state of this component

  const [sesionData, setSesionData] = useState(initialState);

  const updateSesion = () => {
    setSesionData({
        token : 'FGHJKL977',
        sesion : sesionData.sesion + 1,
    });
  }

  return (
    <ownContext.Provider value={sesionData}>
        {/* From here i can read session data */}
        {/* I can update session data */}
        <h3> ** Example useState() y useContext() ** </h3>
        <Component1></Component1>
        <button onClick={updateSesion}> Update Sesion </button>
    </ownContext.Provider>
  )
}

