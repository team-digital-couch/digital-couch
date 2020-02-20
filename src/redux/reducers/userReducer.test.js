import {getMe, getUserInfo} from './userReducer'

//Written by Phoenix Shane

describe('Tests for user reducer', () => {
    test('getMe returns an object', () => {
        const action = getMe()
        expect(action).toBeInstanceOf(Object)
    })

    test('getMe returns an object with a type of GET_ME', () => {
        const action = getMe()
        expect(action.type).toBe('GET_ME')
    })

    test('getMe returns an object with a payload that has typeOf promise', () => {
        const action = getMe()
        expect(action.payload).toBeInstanceOf(Promise)
    })

    test('getUserInfo returns an object', () => {
        const action = getUserInfo()
        expect(action).toBeInstanceOf(Object)
    })

    test('getUserInfo returns an object of type GET_USER_INFO', () => {
        const action = getUserInfo()
        expect(action.type).toBe('GET_USER_INFO')
    })
})