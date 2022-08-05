import React, { useReducer, useContext } from 'react'
import { HIDE_ALERT, SHOW_ALERT } from './actions'
import reducer from './reducer'

const initialState = {
    isLoading: false,
    showAlert: false,
    alertText: '',
    alertType: '',
    displayAlert: () => { },
    hideAlert: () => { }
}

const AppContext = React.createContext()

function AppProvider(props) {
    const [state, dispatch] = useReducer(reducer, initialState)

    function hideAlert(timeOut = 0) {
        setTimeout(() => {
            dispatch({ type: HIDE_ALERT })
        }, timeOut)
    }
    function displayAlert() {
        dispatch({ type: SHOW_ALERT })
        hideAlert(3000)
    }

    return (
        <AppContext.Provider value={{ ...state, displayAlert }}>
            {props.children}
        </AppContext.Provider>
    )
}

function useAppContext() {  //custom hook
    return useContext(AppContext)
}

export { AppProvider, useAppContext, }