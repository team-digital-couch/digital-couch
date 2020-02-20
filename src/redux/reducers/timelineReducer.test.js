import {getTimelines, getEvents} from './timelineReducer'

//written by Josi Reis-West
describe('timeline reducer', () => {
    test('getTimelines should return an action which is type of Object', () => {
        const action = getTimelines()
        expect(action).toBeInstanceOf(Object)
    })

    test('getTimeline should return an action with type GET_TIMELINES', () => {
        const action = getTimelines()
        expect(action.type).toBe('GET_TIMELINES')
    })

    test('getTimelines should return an action with payload type of Promise', () => {
        const action = getTimelines()
        expect(action.payload).toBeInstanceOf(Promise)
    })

    test('getEvents should return an action with type of Object', () => {
        const action = getEvents()
        expect(action).toBeInstanceOf(Object)
    })

    test('getEvents should return an action with type GET_EVENTS', () => {
        const action = getEvents()
        expect(action.type).toBe('GET_EVENTS')
    })

    test('getEvents should return an action with payload type of Promise', () => {
        const action = getEvents()
        expect(action.payload).toBeInstanceOf(Promise)
    })
})