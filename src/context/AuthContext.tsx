import React, { createContext, useReducer } from 'react';
import { authReducer } from './authReducer';


// Definir coo luce, o que información tendré aquí
export interface AuthState {
    isLoggedIn: boolean;
    userName?: string;
    favoriteIcon?: string;
} 

// Estado inicial
export const authInitialState: AuthState = {
    isLoggedIn: false,
    userName: undefined,
    favoriteIcon: undefined
}


// Lo usaremos para decirle a React como luce y que expone el context
export interface AuthContextProps {
    authState: AuthState;
    signIn: () => void;
    changeFavoriteIcon: (iconName: string) => void;
    logout: () => void;
    changeUsername: (username: string) => void;
    
}



// Crear el contexto
export const AuthContext = createContext({} as AuthContextProps );

// Componente proveedor del estado
export const AuthProvider = ({ children }: any ) => {


    const [authState, dispatch] = useReducer(authReducer, authInitialState);

    const signIn = () => {
        dispatch({ type: 'signIn'});
    }

    const changeFavoriteIcon = ( iconName: string ) => {
        dispatch({ type: 'changeFavIcon', payload: iconName })
    }

    const logout = () => {
        dispatch({ type: 'logout' });
    }

    const changeUsername = ( username: string ) => {
        dispatch({ type: 'changeUsername', payload: username })
    }

    
    return (
        <AuthContext.Provider value={{
            authState,
            signIn,
            changeFavoriteIcon,
            logout,
            changeUsername
        }}>
            { children }
        </AuthContext.Provider>
    )
}
