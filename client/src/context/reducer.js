import { HIDE_ALERT, SHOW_ALERT } from './actions'

function reducer(state, action) {
    if (action.type === SHOW_ALERT) {
        return {
            ...state,
            showAlert: true,
            alertText: 'Please provide all values!', //temporarily static
            alertType: 'danger'
        }
    }
    else if (action.type === HIDE_ALERT) {
        return {
            ...state,
            showAlert: false,
            alertText: '',
            alertType: ''
        }
    }
    throw new Error(`no such action: ${action.type}`)
}

export default reducer