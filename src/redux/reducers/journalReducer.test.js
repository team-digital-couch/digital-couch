import {getJournals} from './journalReducer';
//Anthony 'Danger' Coats' tests
describe('Journal reducer', () => {
    test('getJournals should return an action which is an Object', () => {
        const action = getJournals();
        expect(action).toBeInstanceOf(Object)
    })

    test('getJournals should return an action with GET_JOURNALS', () => {
        const action = getJournals();
        expect(action.type).toBe('GET_JOURNALS')
    })

    test('getJournals should return an action with a payload type of Promise', () => {
        const action = getJournals();
        expect(action.payload).toBeInstanceOf(Promise)
    })
})