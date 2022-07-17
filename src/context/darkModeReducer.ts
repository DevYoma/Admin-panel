// type ColorState = {
//     darkMode: boolean;
// }

// type ReducerAction = {
//     type: string;
//     payload: string;
// }

// const DarkModeReducer = (state: ColorState, action: ReducerAction) => {
//     switch (action.type) {
//         case "LIGHT":{
//             return{
//                 darkMode: false
//             }
//         }

//         case "DARK":{
//             return{
//                 darkMode: true
//             }
//         }

//         case "TOGGLE":{
//             return{
//                 darkMode: !state.darkMode
//             }
//         }
        
//         default:
//             return state
//     }
// }

// export default DarkModeReducer;



// CONTEXT CODE

// import { createContext, useReducer, Dispatch } from "react"
// import DarkModeReducer from './darkModeReducer';

// // type 

// type InitialStateType = {
//     darkMode: boolean;
// }

// const INITIAL_STATE = {
//     darkMode: false,
// }

// export const DarkModeContext = createContext({
//     state: INITIAL_STATE,
//     dispatch: () => null
// });
// const {Provider} = DarkModeContext;

// export const DarkModeContextProvider = ({ children }: any) =>  {
//     // we need a reducer => passing/dispatching our actions through the reducers
//     const [state, dispatch] = useReducer(DarkModeReducer, INITIAL_STATE);
//     return(
//         <Provider
//             value={{ 
//                 darkMode: state.darkMode
//             }}
//         >   
//             {children}
//         </Provider>
//     )
// }

export const INITIAL_STATE = {
    
}