import { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCESS, PRODUCT_LIST_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCESS, PRODUCT_DETAILS_FAIL } from '../constants/productConstants.js'
export const productListReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case PRODUCT_LIST_REQUEST:
            return { loading: true, products: [] }
        case PRODUCT_LIST_SUCESS:
            return { loading: false, products: action.payload }
        case PRODUCT_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}


export const productDetailsReducer = (state = { product: { reviews: [] } }, action) => {
    switch (action.type) {
        case PRODUCT_DETAILS_REQUEST:
            return { loading: true, ...state } //spred operator (...state) -> it means that all "elements" from state its placed there
        case PRODUCT_DETAILS_SUCESS:
            return { loading: false, product: action.payload }
        case PRODUCT_DETAILS_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}