import { AuthState } from './AuthContext';


type AuthAction = 
    | { type: 'signIn' }
    | {type: 'changeFavIcon', payload: string }
    | { type: 'logout' }
    | { type: 'changeUsername', payload: string }

// generaEstado
export const authReducer = ( state: AuthState, action: AuthAction ): AuthState => {  //Siempre ser de tipado del estado inicial

    switch ( action.type ) {
        case 'signIn':
            // state.isLoggedIn = true nunca se debe hacer esto por que se esta mutando el estado por lo que react no lo captara de buena maneraq
            return {
                ...state,
                isLoggedIn: true,
                userName: 'no-username-yet'
            }

        case 'changeFavIcon':
            return {
                ...state,
                favoriteIcon: action.payload
            }

        case 'logout' :
            return {
                ...state,
                isLoggedIn: false,
                userName: undefined,
                favoriteIcon: undefined
            }

        case 'changeUsername' :
            return {
                ...state,
                userName: action.payload
            }
    
        default:
            return state;
    }

}