"use client";

import { useReducer, createContext } from "react"; 

type initialType = {
    theme: string,
    fontSize: number 
}
// type ActionType = {
//     type: "Change_Theme" | "Change_Fontsize",
//     payload: number 
// }
type ThemeActionType = {
    type: "Change_Theme", 
}
type FontActionType = {
    type:  "Change_Fontsize",
    payload: number 
}

type ActionType = ThemeActionType | FontActionType;


const initialState = {
    theme: 'light',
    fontSize: 16
}
const reducer = (state: initialType, action: ActionType) => {
    switch (action.type) {
        case "Change_Theme": {
            return {
                ...state, 
                theme: state.theme === "light" ? "dark" : "light"
            }
        }
        case "Change_Fontsize": {
            return {
                ...state,
                fontSize: action.payload
            }
        }              
        default:
        return { ...state };
    }
} 

export const themeContext = createContext<{
    state: initialType;
    dispatch: React.Dispatch<ActionType>;  //indicates that dispatch is a function that can take as an argument actions of type ActionType.
}>({
    state: initialState,
    dispatch: () => {}
});

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return <themeContext.Provider value={{ state, dispatch }} >
        {children}
    </themeContext.Provider>
}

export default ThemeProvider;