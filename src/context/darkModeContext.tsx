import React, {createContext, useReducer} from "react";

export const initialValues = {
    darkMode: false,
    light: () => {},
    dark: () => {},
}


export const AppContext = createContext(initialValues)

// for the reducer file
type State =  {
    darkMode: boolean;
}

type Action = {
    type: "lightMode" | "darkMode";
}

 
function reducer(state: State, action: Action): State {
    switch (action.type) {
        case "lightMode": 
            return {darkMode : false}
        case "darkMode": 
            return {darkMode : true}
        default:
            return state
    }
}


export const AppProvider = ({ children }: any) => {
    const [state, dispatch] = useReducer(reducer, initialValues);

    return <AppContext.Provider value={{
        darkMode: state.darkMode,
        light: () => dispatch({type: 'lightMode'}),
        dark: () => dispatch({type: 'darkMode'}),

    }}>
        {children}
    </AppContext.Provider>
}