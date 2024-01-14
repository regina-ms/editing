import {
    SAVE_DATA,
    EDIT_DATA,
    DELETE_DATA,
    CANCEL_EDIT,
    CHANGE_SERVICE_NAME,
    CHANGE_SERVICE_PRICE,
    SAVE_EDITED_DATA,
    FILTER_DATA,
    DELETE_FILTERED_DATA
} from './actions'

import { faker } from '@faker-js/faker'


const initialState = {
    service: {
        name: '',
        price: '',
    },
    serviceList: [
        {
            name: faker.commerce.productName(),
            price: faker.commerce.price(),
        },
        {
            name: faker.commerce.productName(),
            price: faker.commerce.price(),
        },
        {
            name: faker.commerce.productName(),
            price: faker.commerce.price(),
        },
        {
            name: faker.commerce.productName(),
            price: faker.commerce.price(),
        },
        {
            name: faker.commerce.productName(),
            price: faker.commerce.price(),
        },
        {
            name: faker.commerce.productName(),
            price: faker.commerce.price(),
        },
    ],
    editingService: null,
    serviceToDelete: null,
    filteredList: [],
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
                filteredList: []
            }
        case CANCEL_EDIT:
            return {
                ...state,
                service: { name: '', price: '' },
                editingService: null,
                filteredList: []
            }
        case DELETE_DATA: {
            return {
                ...state,
                serviceList: action.payload,                
            }
        }

        case FILTER_DATA : {
            return {
                ...state,
                filteredList: action.payload
            }
        }

        case DELETE_FILTERED_DATA : {
            return {
                ...state,
                filteredList: action.payload
            }
        }
        default:

            return state
    }
}