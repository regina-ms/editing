import {
    SAVE_DATA,
    EDIT_DATA,
    DELETE_DATA,
    CANCEL_EDIT,
    CHANGE_SERVICE_NAME,
    CHANGE_SERVICE_PRICE,
    SAVE_EDITED_DATA
} from './actions'


const initialState = {
    service: {
        name: '',
        price: '',
    },
    serviceList: [],
    editingService: null,
    serviceToDelete: null,
}

export default function reducer(state = initialState, action) {

    switch (action.type) {
        case CHANGE_SERVICE_NAME:
            return {
                ...state,
                service: {
                    ...state.service,
                    name: action.payload
                }
            }
        case CHANGE_SERVICE_PRICE:
            return {
                ...state,
                service: {
                    ...state.service,
                    price: action.payload
                }
            }
        case SAVE_DATA:
            return {
                ...state,
                service: { name: '', price: '' },
                serviceList: action.payload,
            }
        case EDIT_DATA:
            return {
                ...state,
                editingService: state.service,
            }
        case SAVE_EDITED_DATA:
            return {
                ...state,
                service: { name: '', price: '' },
                editingService: null,
            }
        case CANCEL_EDIT:
            return {
                ...state,
                service: { name: '', price: '' },
                editingService: null,
            }
        case DELETE_DATA: {
            return {
                ...state,
                serviceList: action.payload,
            }
        }
        default:

            return state
    }
}