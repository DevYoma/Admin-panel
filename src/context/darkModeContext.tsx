import React, {createContext, useReducer} from "react";

export const initialValues = {
    darkMode: false,
    light: () => {},
    dark: () => {},
    toggle: () => {},
}


export const AppContext = createContext(initialValues)

// for the reducer file
type State =  {
    darkMode: boolean;
}

type Action = {
    type: "lightMode" | "darkMode" | "toggle";
}

 
function reducer(state: State, action: Action): State {
    switch (action.type) {
        case "lightMode": 
            return {darkMode : false}
        case "darkMode": 
            return {darkMode : true}
        case "toggle":
            return {
                darkMode: !state.darkMode
            }
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
        toggle: () => dispatch({type: 'toggle'})
    }}>
        {children}
    </AppContext.Provider>
}