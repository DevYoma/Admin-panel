import React, {createContext, useEffect, useReducer} from "react";

// JSON.parse(localStorage.getItem("teeMeasuresAverages") || "") 

export const initialValues = {
    // currentUser: false,
    currentUser: JSON.parse(localStorage.getItem('user') || "") || false  ,
    login: () => {},
    logout: () => {},
}

export const AuthContext = createContext(initialValues)

// for the reducer file
type State =  {
    currentUser:  boolean;
}

type Action = {
    payload?: any;
    type: "login" | "logout";
}
 
function reducer(state: State, action: Action): State {
    switch (action.type) {
        case "login":{
            return {
                currentUser: true,
            }
        }
        case "logout":{
            return{
                currentUser: false,
            }
        }
        default:
            return state
    }
}

export const AuthProvider = ({ children }: any) => {
    const [state, dispatch] = useReducer(reducer, initialValues);

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(state.currentUser));
    }, [state.currentUser])

    return <AuthContext.Provider value={{ 
        currentUser: state.currentUser,
        login: () => dispatch({ type: 'login' }, ),
        logout: () => dispatch({ type: 'logout'})
     }}>
        {children}
    </AuthContext.Provider>
}