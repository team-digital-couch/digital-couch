import axios from 'axios'

const initialState = {
    events: [],
    eventLoading: false
}

const GET_EVENTS = 'GET_EVENTS'

export const getEvents = () => {
    return {
        type: GET_EVENTS,
        payload: axios.get('/api/events')
    }
}

export default function reducer(state = initialState, action) {
    const {type, payload} = action

    switch(type) {
        case `${GET_EVENTS}_PENDING`:
            return {
                ...state,
                loading: true
            }
        default: return state
    }
}